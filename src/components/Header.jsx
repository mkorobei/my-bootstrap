import React from 'react'
import { Button, Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../App.css'

const Header = () => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <Link to="/">A&B</Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Главная
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Избранное
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              Корзина
              {cartItemCount > 0 && (
                <Badge bg="danger" className="ms-1">
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
                    Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header
