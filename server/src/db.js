import mongoose from 'mongoose';
const { connect } = mongoose;

export default async () => {
  const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  try {
    await connect(process.env.DB_CONNECTION, connectionParams);

    console.log('Connected to database successfully');
  } catch (error) {
    console.error(error);
    console.log("Couldn't connect to database");
  }
};
