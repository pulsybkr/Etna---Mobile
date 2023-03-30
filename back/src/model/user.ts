import { auth, db } from "../db";
const User = {
  createUser: async (email: string, password: string): Promise<string> => {
    try {
      const userCredential = await db.auth().createUserWithEmailAndPassword(email, password);
      return userCredential.user?.uid || '';
    } catch (error) {
      throw new Error(`Failed to create user: ${error}`);
    }
  },
  loginUser: async (email: string, password: string): Promise<string> => {
    try {
      const userCredential = await db.auth().signInWithEmailAndPassword(email, password);
      return userCredential.user?.uid || '';
    } catch (error) {
      throw new Error(`Failed to login user: ${error}`);
    }
  }
};

export default User;
