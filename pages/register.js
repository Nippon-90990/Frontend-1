import { React, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '../styles/Login.module.css'
import { HiAtSymbol , HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { fetchUserFromApi } from '@/utils/api'
import { API_URL , STRAPI_API_TOKEN } from '@/utils/urls'

const register = () => {


  const [show, setShow] = useState(false);
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const handleRegister = async ()=> {
  //   const registerinfo = {
  //     username : username,
  //     email : email,
  //     password : password
  //   }


  //   const register = await fetch(`${API_URL}api/reguser`, {
  //     method : "POST",
  //     headers: {
  //       Authorization: "Bearer " + STRAPI_API_TOKEN,
  //       "Content-Type": "application/json",
  //     },

  //     body : JSON.stringify(registerinfo)

  //   })

  //   const registerResponse = await register.json();
  //   console.log(registerResponse)

  // }


  return (
    <Layout>
      {/* <Head>
        <title>Login</title>
      </Head> */}

      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className="title">
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
          <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, libero!</p>
        </div>

        {/* forrm  */}

        <form className='flex flex-col gap-5'>

          <div className={styles.inputGroup}>
            <input className={styles.inputText} required type="text" name="text" id="text" placeholder='Username' /><span className='icon flex items-center px-4'><HiOutlineUser size={25}/></span>
          </div>

          <div className={styles.inputGroup}>
            <input className={styles.inputText} required type="email" name="email" id="email" placeholder='Email' /><span className='icon flex items-center px-4'><HiAtSymbol size={25}/></span>
          </div>

          <div className={styles.inputGroup}>
            <input className={styles.inputText} required type={`${show?"text":"password"}`} name="password" id="password" placeholder='Password' /><span className='icon flex items-center px-4' onClick={()=>setShow(!show)}><HiFingerPrint size={25} className='cursor-pointer'/></span>
          </div>

          {/* <div className={styles.inputGroup}>
            <input className={styles.inputText} type={`${show?"text":"password"}`} name="password" id="password" placeholder='Confirm Password' /><span className='icon flex items-center px-4' onClick={()=>setShow(!show)}><HiFingerPrint size={25} className='cursor-pointer'/></span>
          </div> */}

          {/* button */}

          <div className="inputButton">
            <button type='button' className={styles.button}>
              Log In
            </button>
          </div>

          <div className="inputButton">
            <button type='button' className={styles.buttonCustum}>
              <Image src={'/google.svg'} height={20} width={20}></Image> Log In With Google
            </button>
          </div>

          {/* <div className="inputButton">
            <button type='button' className={styles.buttonCustum}>
            <Image src={'/facebook.svg'} height={25} width={25}></Image> Log In With Facebook
            </button>
          </div> */}

        </form>
        <p className='text-center text-gray-400'>
          Have an account? <Link className='text-blue-700' href={'/login'}>Sign In</Link>
        </p>

      </section>        

    </Layout>
  )
}

export default register