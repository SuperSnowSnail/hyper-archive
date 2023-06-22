import mongoose from 'mongoose';

const mongoConnect = async () => {
  const db = mongoose.connect('mongodb://localhost/fav-plus-test-db');
  return db;
};

export default mongoConnect;
