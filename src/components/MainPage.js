import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function MainPage() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useState('');
  const [search, setSearch] = useState('');

  const navBarStyle = {
    backgroundColor: 'black',
  };

  useEffect(() => {
    const name = Cookies.get('name');
    if (name) {
      setCookie(name);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    Cookies.remove('name');
    navigate('/login');
  };

  return (
    <div className="Container">
      <Navbar expand="lg" className="bg-body-primary" style={navBarStyle}>
        <Container fluid>
          <Navbar.Brand
            href="/main"
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '3.5vh',
              fontFamily: 'Monospace',
              marginLeft: '20px',
              marginRight: '20px'
            }}
          >
            FIND-JOBS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'white' }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 flex-grow-1" navbarScroll>
              <Form className="w-100">
                <Form.Group controlId="search" className="w-100">
                  <Form.Control
                    type="text"
                    placeholder="Search ...."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-100"
                    style={{ width: '100%' }}
                  />
                </Form.Group>
              </Form>
            </Nav>

            {cookie && (
              <Nav className="d-flex align-items-center">
                <span
                  className="m-2 p-2 text-center bg-black text-color-white rounded"
                  style={{ color: 'white', fontFamily: 'cursive' }}
                >
                  {cookie}
                </span>
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </Nav>
            )}

            <Nav className="ms-auto">
              <NavDropdown
                align="end"
                title={<img src="homeImage.png" alt="Logo" style={{ width: '30px', cursor: 'pointer', marginLeft: '20px' }} />}
                id="nav-dropdown"
              >
                <NavDropdown.Item href="">JSP</NavDropdown.Item>
                <NavDropdown.Item href="">JPP</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {cookie && (
        <Container
          className="text-center d-flex align-items-center flex-column justify-content-center"
          style={{ marginTop: '5%' }}
        >
          <Container className="text-center">
            <h2>Welcome to Dashboard</h2>
            <Button variant="primary" href="/login" className="mt-3">
              Login
            </Button>
          </Container>
        </Container>
      )}
    </div>
  );
}
