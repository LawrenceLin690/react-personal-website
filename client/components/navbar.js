import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

const Navbar = () => {
  return (
    <Menu secondary style={{paddingLeft: '4vw'}} id="navbar">
      <Menu.Item>
        <Link to="/home" style={{color: 'black', fontSize: '1vw'}}>
          <h4>HELLO.</h4>
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
