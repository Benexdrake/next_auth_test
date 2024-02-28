import {signOut, useSession} from 'next-auth/react'
import Link from 'next/link';

export default function Home() {
  const {data:session} = useSession();
  return (
    <div className='container'>

     { !session && 
          <>
            <Link href='/login'><button>SignIn with Credentials</button></Link>
          </>
        }

        { session && 
          <>
            <button  onClick={() => signOut()}>Sign out</button>
            <p>Welcome {session.user?.email}</p>
          </> 
        }
        </div>
  )
}
