import mongoose from "mongoose";
const { Schema, model } = mongoose;

const personSchema = new Schema({
    name: {
       type: String,
       required: true,
    },
    created_at: Date,
    updated_at: Date,
})

const Person = model("Person", personSchema);
export default Person;
