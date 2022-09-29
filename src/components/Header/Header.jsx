import UserMenu from 'components/UserMenu';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectLoggedIn } from 'redux/auth/selectors.auth';
import s from './Header.module.css';

function Header() {
  const isLoggedIn = useSelector(selectLoggedIn);

  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Phonebook App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto wrapper">
              <NavLink className={getActiveClassName} end to="/">
                Home
              </NavLink>
              {isLoggedIn && <NavLink className={getActiveClassName} end to="/contacts">
                Contacts
              </NavLink>}

              {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <NavLink className={getActiveClassName} end to="/login">
                  Login
                </NavLink>
                <NavLink className={getActiveClassName} end to="/register">
                  Register
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
