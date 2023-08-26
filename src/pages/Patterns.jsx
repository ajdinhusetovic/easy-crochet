import React, { useEffect, useState } from 'react'
import './patterns.scss'
import { motion } from 'framer-motion'
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, getDocs, collection } from "firebase/firestore"
import { db } from '../config/firebase'
import { Pattern } from '../components/Pattern'

export const Patterns = () => {

  const schema = yup.object().shape({
    title: yup.string().min(4).required("You must add a pattern name!"),
    yarnName: yup.string().min(4).required("You must add a yarn name!"),
    yarnSkein: yup.number().min(1).required("Minimum value is 1").typeError("Yarn skein must be a number"),
    hookSize: yup.number().min(1).required("Minimum value is 1").typeError("Hook size must be a number")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const postsRef = collection(db, "patterns")

  const onCreatePattern = async (data) => {
    addDoc(postsRef, {
      ...data
    })
  }

  const [patternsList, setPatternsList] = useState(null)

  const getPatterns = async () => {
    const data = await getDocs(postsRef)
    const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setPatternsList(filteredData)
    
  }

  useEffect(() => {
    getPatterns()
  }, [])

  return (
    <div className='patterns-wrapper'>
      <div className="left">
        <form onSubmit={handleSubmit(onCreatePattern)}>
          <label>Enter pattern name</label>
          <p>{errors.title?.message}</p>
          <input type="text" {...register("title")} />
          <label>Enter yarn name</label>
          <p>{errors.yarnName?.message}</p>
          <input type="text" {...register("yarnName")} />
          <label>Enter yarn skein</label>
          <p>{errors.yarnSkein?.message}</p>
          <input type="number" {...register("yarnSkein")} />
          <label>Enter hook size</label>
          <p>{errors.hookSize?.message}</p>
          <input type="number" {...register("hookSize")} />
          <motion.input
            whileTap={{ scale: 0.9 }}
            type="submit"
            value={"Add pattern"}
            id='submit-btn'
          />
        </form>
      </div>
      <div className="right">
        <div className="patterns-title">
          <h1>Your Patterns</h1>
        </div>
        <div className="patterns">
          {patternsList?.map((pattern) => (
            <>
              <Pattern pattern={pattern} />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
