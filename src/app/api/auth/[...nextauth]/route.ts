import { connectToMongoDB } from '@/lib/mongodb';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials;
        try {
          await connectToMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }
          console.log(password);
          const passwordMatch = await bcrypt.compare(password, user.password);
          console.log(passwordMatch);
          if (!passwordMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log('Error', error);
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
