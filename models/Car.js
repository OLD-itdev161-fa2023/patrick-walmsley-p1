import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
});

const Car = mongoose.model('car', CarSchema);

export default Car;