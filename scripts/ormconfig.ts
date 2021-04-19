import { configService } from './config';
import * as fs from 'fs';
try {
  fs.writeFileSync(
    'ormconfig.json',
    JSON.stringify(configService.getTypeOrmConfig(), null, 2),
  );
} catch (error) {
  console.log(error);
}
