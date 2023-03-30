import { auth, db } from "../db";

import Student from "../model/students";
const fireStore = db.firestore();

import { Request, Response } from 'express';
 
const addStudent = async (req: Request, res: Response) => {
  try {
    console.log("Adding new student");
    const data = req.body;
    const studentRef = await fireStore.collection("students").doc();
    await studentRef.set(data);
    const studentId = studentRef.id;
    res.status(201).json({ message: "Record saved successfully", studentId });
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};

 
const getAllStudents = async (req: Request, res: Response) => {
  try {
    console.log("Getting all Students");
    const students = await fireStore.collection("students");
    const data = await students.get();
    const arr: Student[] = [];
    if (data.empty) {
      res.status(200).json({ message: "No records found" });
    } else {
      let total = 0;
      data.forEach((item) => {
        const student = new Student(
          item.data().id,
          item.data().login,
          item.data().fullName          
        );
        arr.push(student);
        total = total + 1;
      });
      res.status(200).json({
        listing: arr,
        count: total
      });
    }
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error)
  }
};
 
const getStudent = async (req: Request, res: Response) => {
  try {
    const login = req.params.login;
    console.log("Getting student with login= %s", login);
    const studentsCollection = await fireStore.collection("students").where("login", "==", login).get();
    if (studentsCollection.empty) {
      res.status(404).json({ message: "Record not found" });
    } else {
      const student = studentsCollection.docs[0];
      const studentData = student.data();
      const studentId = student.id;
      res.status(200).json({ ...studentData, studentId });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};


const updateStudent = async (req: Request, res: Response) => {
  try {
    const login = req.params.login;
    console.log("Updating student with login= %s", login);
    const data = req.body;
    const studentRef = await fireStore.collection("students").where("login", "==", login).get();
    if (studentRef.empty) {
      res.status(404).json({ message: "No student found with the provided login" });
      return;
    }
    const studentDoc = studentRef.docs[0];
    await studentDoc.ref.update(data);
    res.status(204).json({ message: "Record updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const login = req.params.login;
    console.log("Deleting student with login= %s", login);
    const studentRef = await fireStore.collection("students").where("login", "==", login).get();
    if (studentRef.empty) {
      res.status(404).json({ message: "No student found with the provided login" });
      return;
    }
    const studentDoc = studentRef.docs[0];
    await studentDoc.ref.delete();
    res.status(204).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// todo - add delete all students
 
export {
  addStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent
};