import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Category from '@/models/Category';

// Get all categories
export async function GET(request) {
  const db = mongoose.connect('mongodb://localhost/fav-plus-test-db');

  const categories = await Category.find();

  return NextResponse.json({ categories });
}

// Add new category
export async function POST(request) {
  /* const db = mongoose.connect('mongodb://localhost/fav-plus-test-db');

  const categories = await Category.find();

  return NextResponse.json({ categories }); */
}

export const dynamic = 'force-dynamic';
