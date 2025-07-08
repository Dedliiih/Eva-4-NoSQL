import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const MONGO = process.env.MONGO_URL as string;
const MONGO_CONFIG = MongooseModule.forRoot(MONGO);

export default MONGO_CONFIG;
