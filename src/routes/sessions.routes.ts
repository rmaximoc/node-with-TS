import { Router } from 'express';

const sessionRouter = Router();

sessionRouter.post('/', async (req, res) => {
  try {
    return res.json(true);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default sessionRouter;
