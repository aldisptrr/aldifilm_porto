import { Container, Nav, Navbar } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
        <Navbar variant="dark" className="Navbar">
          <Container>
            <Navbar.Brand href='/'>ALDI MOVIES</Navbar.Brand>
            <Nav>
              <Nav.Link href='#trending'>TRENDING</Nav.Link>
              <Nav.Link href='#superhero'>SUPERHERO</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavigationBar