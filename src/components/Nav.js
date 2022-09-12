import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
   
    <div>

<ul className='nav-ul'>

<li><Link to="/">Home</Link></li>
<li><Link to="/addproduct">AddProduct</Link></li>
<li><Link to="/updateproduct">UpdateProduct</Link></li>
<li><Link to="/logout">Logout</Link></li>
<li><Link to="/profile">profile</Link></li>


<li><Link to="/signup">Signup</Link></li>







</ul>


    </div>


  )
}

export default Nav