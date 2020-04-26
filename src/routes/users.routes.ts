import { Router } from 'express';

import CreateUserService from '../service/CreateUsersService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      password,
      email,
    });

    delete user.password;

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default usersRouter;
