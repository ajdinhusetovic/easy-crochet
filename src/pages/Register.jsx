import React, { useState } from 'react'
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import "./register.scss"
import { motion } from 'framer-motion'

export const Register = () => {

    const [error, setError] = useState("")

    const schema = yup.object().shape({
        email: yup.string().email().required("This field is required"),
        password: yup.string().min(4).max(20).required("Password field is required"),
        passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required("This is a required field"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const createUserAccount = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password)
        } catch (error) {
            setError("Oops! There's been an error registering your account!")
        }
    }

    return (
        <section className="register-wrapper">
            <div className="register">
                <h1>Create An Account</h1>
                <form onSubmit={handleSubmit(createUserAccount)}>
                    <div className="inputs">
                        {error && (
                            <p className='error-message'>{error}</p>
                        )}
                        <input placeholder="Email" {...register("email")} />
                        <p className='error-message'>{errors.email?.message}</p>
                        <input type="password" placeholder="Password" {...register("password")} />
                        <p className='error-message'>{errors.password?.message}</p>
                        <input type="password" placeholder='Confirm Password' {...register("passwordConfirm")} />
                        <p className='error-message'>{errors.passwordConfirm?.message}</p>
                    </div>
                    <div className="buttons">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            type='submit'>Register
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    )
}
