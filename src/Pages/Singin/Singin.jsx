import React from 'react'
import { Link } from 'react-router-dom'

const Singin = () => {
  return (
    <div><h1>Singin</h1><br />
<button>
<Link to={"/singup"}>to singup</Link></button>
    </div>
  )
}

export default Singin