import jwt from 'jsonwebtoken';
import User from '../model/user';
import { Request, Response, NextFunction } from 'express';

const authController = {
  register: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const userId = await User.createUser(email, password);
      const token = jwt.sign({ userId }, 'secretKey');
      res.status(201).json({ message: 'User créé', token });
      console.log({ message: 'User créé', userId });
    } catch (error) {
      res.status(222).json({ message: 'Une erreur s\'est produite lors de la création de l\'utilisateur', error });
    }
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const userId = await User.loginUser(email, password);
      const token = jwt.sign({ userId }, 'secretKey');
      res.status(200).json({ message: 'User connecté', token });
      console.log({ message: 'user connecté id :', userId });
    } catch (error) {
      res.status(225).json({ message: 'Nom d\'utilisateur ou mot de passe invalide' });5
      console.log({ message: 'Utilisateur introuvable ou mauvais mot de passe' });
    }
  },
  
};

export default authController

