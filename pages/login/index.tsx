'use client';

import { FormEvent } from "react";

import style from '@/style_modules/login.module.css'
import { signIn, useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";

export default function Login()
{
    

    const router = useRouter();
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect:false,
            
        });
        console.log({response})

        if(!response?.error)
        {
            router.push('/');
        }
    }

    return (
        <div className={style.container}>

        <h1>Hello World</h1>
        <form onSubmit={handleSubmit} className="">
            <input name="email" className={style.input} type="email" placeholder="Email"/>
            <input name="password" className={style.input} type="password" placeholder="Password"/>
            <button type="submit" className={style.button}>Login</button>
        </form>
        </div>
    )

}