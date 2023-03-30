import {db} from "../db";
const fireStore = db.firestore();
import { Request, Response } from 'express';

const addPresence = async (req: Request, res: Response) => {
  try {
    console.log("Adding new Presence");
    const data = req.body;
    await fireStore.collection("presences").add(data);
    res.status(201).json({ message: "Record presence successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getAllPresences = async (req: Request, res: Response) => {
  try {
    const snapshot = await fireStore.collection("presences").get();
    const presences = snapshot.docs.map((doc) => doc.data());
    const promises = presences.map(async (presence) => {
      if (typeof presence.studentId !== 'string') {
        throw new Error('Invalid studentId');
      }
      const studentSnapshot = await fireStore.collection("students").doc(presence.studentId).get();
      if (!studentSnapshot.exists) {
        throw new Error(`Student with ID ${presence.studentId} not found`);
      }
      const student = studentSnapshot.data();
      return {
        studentName: student && student.name,
        date: presence.date,
        present: presence.present,
      };
    });
    const results = await Promise.all(promises);
    res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


export {
  addPresence,
  getAllPresences,
};
