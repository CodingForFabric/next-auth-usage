import { connectToMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToMongoDB();
    await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: 'User registered.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error occurred while registering user' },
      { status: 500 }
    );
  }
}
