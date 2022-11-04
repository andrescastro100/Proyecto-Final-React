import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
return (
    <Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand as={Link} to='/'>
        Drink Party
        </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>
            Home
        </Nav.Link>
        <Nav.Link as={Link} to='/category/vino'>Vino</Nav.Link>
        <Nav.Link as={Link} to='/category/bermut'>Bermut</Nav.Link>
        <Nav.Link as={Link} to='/category/cerveza'>Cerveza</Nav.Link>
        <Nav.Link as={Link} to='/category/vodka'>Vodka</Nav.Link>
        <Nav.Link as={Link} to='/category/Whisky'>Whisky</Nav.Link>
        </Nav>
        <CartWidget />
    </Container>
    </Navbar>
)
}

export default NavBar;