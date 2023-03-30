import express from 'express';
const router = express.Router();
import studentRoutes from './studentRouter';
import presenceRoutes from './presenceRoutes';
import Auth from './auth';


// Route principale pour la page d'accueil
router.get('/', (req, res) => {
  res.send('Welcome to the Attendance System API');
});

// Route pour les routes de l'étudiant
router.use('/students', studentRoutes);

router.use('/login', Auth);


// Route pour les routes de la présence
router.use('/presences', presenceRoutes);

export default router;
