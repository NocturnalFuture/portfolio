import React from 'react'

export default function ProjectList(props){
  return(
    <div>
        {props.projects.length > 0 && <h2>Projects:</h2>}
        {props.projects.map(el => {
          return(
            <div key={el._id}>
              <h3>{el.title}</h3>
            </div>
          )
        })}
    </div>
  )
}