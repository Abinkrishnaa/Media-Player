import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>


      <Navbar className="bg-primary">
        <Container>
        <Link to={'/'} style={{textDecoration:"none"}}>
        <Navbar.Brand href="#home" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://icons.veryicon.com/128/System/Media%20Player/Adobe%20Media%20Player.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media-Player
          </Navbar.Brand>
         </Link>
        </Container>
      </Navbar>



    </>
  )
}

export default Header
