import { Request, Response, NextFunction } from 'express';
import { db } from "../db"; // firebase database


const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  db.auth().verifyIdToken(token)
    .then((decodedToken: any) => {
      req.user = decodedToken;
      next();
    })
    .catch(() => {
      res.status(401).json({ message: 'Unauthorized' });
    });
};

export default requireAuth