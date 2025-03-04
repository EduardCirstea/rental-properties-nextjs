import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: { prompt: "consent" },
      },
    }),
  ],
  callbacks: {
    //Invoked on successful authentication
    async signIn({ profile }) {
      try {
        await connectDB();
        let user = await User.findOne({ email: profile.email });
        if (!user) {
          const username = profile.name.slice(0, 20);
          await User.create({
            email: profile.email,
            username: username,
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },

    //Session callback function that modifies the session object
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });
      session.user.id = user._id.toString();
      return session;
    },
  },
};
