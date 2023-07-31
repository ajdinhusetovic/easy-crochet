import React from 'react'
import './pattern.scss'

export const Pattern = (props) => {
  const { pattern } = props
  return (
    <div className='pattern'>
      <div className="title">
        {pattern.title}
      </div>
      <div className="yarn-name">
        {pattern.yarnName}
      </div>
      <div className="yarn-skein">
        {pattern.yarnSkein}
      </div>
      <div className="hook-size">
        {pattern.hookSize}
      </div>
    </div>
  )
}
