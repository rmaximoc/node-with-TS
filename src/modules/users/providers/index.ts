import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHasProvider';
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHasProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
