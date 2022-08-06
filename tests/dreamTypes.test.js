import getDreamTypes from "../src/controllers/dreamTypes"

describe("Dream Types Tests", () => {
    it ("Function is defined", () => {
        expect(typeof getDreamTypes).toBe('function')
    })
    it("Return all dream types", async () => {
        const types = getDreamTypes()
        expect(Array.isArray(types)).toBe(true)
    })
})