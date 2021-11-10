
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
 <div className="Header">
 <Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
       
        <NavDropdown title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Help">
           Help 
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/Signup">
          Sign up
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="dark">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container fluid style={{background:"black",color:"white", paddingLeft:"50px"}}>
   <a style={{padding:"10px"}}>First option </a>
   <a>Second option</a>
</Container>
</div>
  );
}

export default Header;
