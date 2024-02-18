import { connectToMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import User from '@/models/user';

export async function POST(req: Request) {
  try {
    await connectToMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select('_id');
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
