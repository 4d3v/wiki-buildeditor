import mongoose from 'mongoose';

export default async (DBURI: string): Promise<void> => {
  DBURI = DBURI.replace('<%PASS%>', process.env.DBPASSWORD!).replace(
    '<%DBN%>',
    process.env.DBNAME!
  );
  try {
    const connection = await mongoose.connect(DBURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    if (process.env.NODE_ENV === 'development')
      console.log(`⚡️[DB]: MongoDB connected ${connection.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
