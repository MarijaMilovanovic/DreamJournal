import mongoose, { Schema } from "mongoose";
import MongooseDelete from "mongoose-delete";
import mongoosePaginate from 'mongoose-paginate-v2'
import DREAM_TYPE from "../enums/dreamType";

const dreamSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        type: {
            type: String,
            enum: [DREAM_TYPE.EXCITING, DREAM_TYPE.HAPPY, DREAM_TYPE.SAD, DREAM_TYPE.SCARY]
        }
    },
    { timestamps: true }
)

dreamSchema.plugin(mongoosePaginate)
dreamSchema.plugin(MongooseDelete)

export default mongoose.model('dream', dreamSchema)