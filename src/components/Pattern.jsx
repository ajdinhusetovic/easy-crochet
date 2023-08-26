import React from 'react'
import './pattern.scss'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { motion } from 'framer-motion'

export const Pattern = (props) => {
  const { pattern } = props

  const deletePattern = async (id) => {
    const patternDoc = doc(db, "patterns", id)
    await deleteDoc(patternDoc)
  }
  return (
    <div className='pattern'>
      <div className="title">
        <span className='pattern-label'>Title</span>{pattern.title}
      </div>
      <div className="yarn-name">
        <span className='pattern-label'>Yarn name</span>{pattern.yarnName}
      </div>
      <div className="yarn-skein">
        <span className='pattern-label'>Yarn skein</span>{pattern.yarnSkein}
      </div>
      <div className="hook-size">
        <span className='pattern-label'>Hook size:</span>{pattern.hookSize}
      </div>
      <div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => deletePattern(pattern.id)}>
          delete
        </motion.button>
      </div>
    </div>
  )
}
