import express from "express";
import { addPresence, getAllPresences } from "../controllers/presenceController";
 
const router = express.Router();
 
// http://localhost:3000/api/presence
router.post('/', addPresence);
 
// http://localhost:3000/api/presence
router.get("/", getAllPresences);
 
// http://localhost:3000/api/student/xxxx_student_id
// router.get("/student/:login", getStudent);
 
// http://localhost:3000/api/student/xxxx_student_id
// router.put("/student/:login", updateStudent);
 
// http://localhost:3000/api/student/xxxx_student_id
// router.delete("/student/:login", deleteStudent);
 
export default router