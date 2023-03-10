import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);

    console.log('Base de datos online');
  } catch (error) {
    console.error(error);
    throw new Error('Error al iniciar la base de datos');
  }
};
