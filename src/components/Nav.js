import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div>
        <h1><Link id="logo" to="/newapp">New app</Link></h1>
    </div>
    
  )
}

export default Nav;