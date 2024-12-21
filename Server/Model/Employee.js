import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    dateOfJoining: { type: Date, required: true },
    salary: { type: Number, required: true },
    image: { type: String }
});

export default mongoose.model("Employee", employeeSchema);