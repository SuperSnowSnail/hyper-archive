import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Category from '@/models/Category';

/* export async function GET(request, { params: { id } }) {
  return NextResponse.json({ id });
} */

// Update category (links or name)
export async function PATCH(request, { params: id }) {
  /* const db = mongoose.connect('mongodb://localhost/fav-plus-test-db');

  const body = await request.json();

  const categories = await Category.find();

  return NextResponse.json({ categories }); */
}

// Delete category
export async function DELETE(request, { params: { id } }) {
  /* const db = mongoose.connect('mongodb://localhost/fav-plus-test-db');

  const categories = await Category.find();

  return NextResponse.json({ categories }); */
}

// DOESN'T NEED IT?

// Get all photos
/* export async function GET(request) {
  const db = mongoose.connect('mongodb://localhost/fav-plus-test-db');

  const categories = await Category.find();

  return NextResponse.json({ categories });
}
 */
// Add new category
/* export async function POST(request) {
  const db = mongoose.connect('mongodb://localhost/fav-plus-test-db');

  const categories = await Category.find();

  return NextResponse.json({ categories });
} */

export const dynamic = 'force-dynamic';
