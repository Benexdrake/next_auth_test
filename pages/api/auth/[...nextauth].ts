import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy:'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {

                // .env file with email and password or use a database.
                if(credentials?.email === process.env.email && credentials?.password === process.env.password)
                    return {id:'1', name: credentials?.email.split('@')[0], email:credentials?.email}
               return null;
            }
        })
    ]
})

export default handler;