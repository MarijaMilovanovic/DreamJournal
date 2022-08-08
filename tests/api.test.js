import request from "supertest"
import express, { json } from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import errorHandler from '../src/errorHandler';
import morganMiddleware from '../src/morganMiddleware';
import dreamRoutes from '../src/routes/dreams'
import dreamTypesRoutes from '../src/routes/dreamTypes'
import DREAM_TYPE from "../src/enums/dreamType";

dotenv.config()

const {PORT, DB_URL_LOCAL_TEST, BASE_URL} = process.env

let server

beforeAll(async () => {
  const app = express();
  
  app.use(json())
  app.use(morganMiddleware);
  
  app.use('/', dreamRoutes)
  app.use('/types', dreamTypesRoutes)
  
  app.use(errorHandler)
  
  await mongoose
    .connect(DB_URL_LOCAL_TEST)
    .then(() => {
      server = app.listen(PORT, (req, res) => console.log(`server is running on port: ${PORT}`))
    })
    .catch(err => {
      console.log(err)
    })
})

afterAll(done => {
  mongoose.connection.close()
  server.close()
  done()
})

describe("GET /types", () => {
  it("should return array of dream types", async () => {
    const response = await request(BASE_URL).get("/types")

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual(expect.arrayContaining(Object.values(DREAM_TYPE)))
  })
})

describe("GET /", () => {
  it("should return all dreams", async () => {
    const response = await request(BASE_URL).get("/")

    expect(response.statusCode).toEqual(200)
    expect(Object.keys(response.body).sort()).toEqual(["docs", "totalDocs", "limit", "totalPages", "page", "pagingCounter", "hasPrevPage", "hasNextPage", "prevPage", "nextPage"].sort())
    expect(Array.isArray(response.body.docs)).toEqual(true)
    expect(response.body.docs).toHaveLength(response.body.limit)
  })

  it("should return all happy dreams from 2022-03-04 to 2022-05-25", async () => {
    const lowestDate = new Date("2022-03-04")
    const largestDate = new Date("2022-05-25")

    const response = await request(BASE_URL).get("/").query({ type: DREAM_TYPE.HAPPY, startDate: "2022-03-04", endDate: "2022-05-25" })
    const filteredDates = response.body.docs.filter(d => new Date(d.date) >= lowestDate && new Date(d.date) <= largestDate)

    expect(response.body.docs.length).toEqual(filteredDates.length)
  })
})

describe("POST /", () => {
  it("should create new dream", async () => {
    const newDream = {
      title: "Test Dream",
      description: "Test Dream Description",
      date: "2022-03-07T00:00:00.000Z",
      type: DREAM_TYPE.EXCITING
    }

    const response = await request(BASE_URL).post("/").send(newDream)

    expect(response.status).toEqual(200)
    expect(response.body).toEqual(expect.objectContaining(newDream))
  })

  it("should return an error for invalid payload", async() => {
    const newDream = {
      title: "This dream is missing fields",
      type: DREAM_TYPE.EXCITING
    }

    const response = await request(BASE_URL).post("/").send(newDream)

    expect(response.status).toEqual(500)
    expect(response.body).toEqual(expect.objectContaining({error: expect.any(String)}))
  })
})
