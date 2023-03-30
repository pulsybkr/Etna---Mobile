import express, { NextFunction } from "express";
import { addStudent, getAllStudents, getStudent, updateStudent, deleteStudent } from "../controllers/studentController";
 
const router = express.Router();
 
router.post("/", addStudent);

router.get("/", getAllStudents);

router.get("/:login", getStudent);

router.put("/:login", updateStudent);

router.delete("/:login", deleteStudent);

 
export default router