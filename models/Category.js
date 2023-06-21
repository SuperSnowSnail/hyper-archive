import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  title: String,
  url: {
    type: String,
    required: true,
  },
  description: String,
  imageUrl: String,
});

const categorySchema = mongoose.Schema({
  name: String,
  links: [linkSchema],
});

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
