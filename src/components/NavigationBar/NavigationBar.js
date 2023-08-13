import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavigationBar.css"


const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark bg-gradient" style={{ padding: '5px 0', height: '50px' }}>
      <Container fluid>
        <Navbar.Brand href="/" className="text-light cursive"> <span className='brand-initial cursive'>R</span>eel<span className='brand-initial cursive'>R</span>atings</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-light">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-light">Movies</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for a movie!"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" className="me-2">Search</Button>
            <Button variant="outline-light" className="me-2">Login</Button>
            <Button variant="outline-light" className="me-2">Register</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;