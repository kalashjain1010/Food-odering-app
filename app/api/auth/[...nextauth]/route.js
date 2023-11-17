import { User } from "@/app/models/User"
import mongoose from "mongoose"
import NextAuth from "next-auth"
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/libs/MangoConnect";


const handler = NextAuth({
  secret: process.env.SECRET,
adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    CredentialsProvider({
     
        name: 'Credentials',
        id: 'credentials',
    
        credentials: {
          username: { label: "Email", type: "email", placeholder: "test@gmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {

          // console.log({credentials})

          const email = credentials?.email
          const password = credentials?.password

          mongoose.connect(process.env.MANGO_URL)

          const user = await User.findOne({email})
          const passwordOk = user && bcrypt.compareSync(password, user.password)
          console.log({passwordOk})

          if(passwordOk){
            return user;
          }
          return null
        }
      })
  ],
})

export { handler as GET, handler as POST }