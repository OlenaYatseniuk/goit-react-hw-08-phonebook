import UserMenu from 'components/UserMenu';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Photobook App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={s.link} to="/">Home</NavLink>
            <NavLink className={s.link} to="/contacts">Contacts</NavLink>
            <NavLink className={s.link} to='/login'>Login</NavLink>
            <NavLink className={s.link} to='/register'>Register</NavLink>
          </Nav>
          <UserMenu/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
