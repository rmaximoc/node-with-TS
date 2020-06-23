import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUsersService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, password, email } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      password,
      email,
    });

    delete user.password;

    return res.json(user);
  }
}
