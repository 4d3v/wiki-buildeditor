import dotenv from 'dotenv';
import app from './app';
import mongooseSetup from './config/mongooseSetup';

dotenv.config({ path: './.env' });

mongooseSetup(process.env.DBURI!);

const { PORT, NODE_ENV } = process.env;

app.listen(PORT || 5000, () => {
  console.log(`⚡️[server]: Server is running in ${NODE_ENV}`);
});
