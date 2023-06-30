import mongoose from 'mongoose';

const mongoConnect = async () => {
  const promise = mongoose.connect('mongodb://localhost/fav-plus-test-db').then((mongoose) => mongoose);
  const connect = await promise;
  return connect;
};

export default mongoConnect;
