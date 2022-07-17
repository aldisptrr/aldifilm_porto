import "../App"
import {Container,Form} from "react-bootstrap"

const Footer = () => {
    return (
      <Container id='footer'>
        <div>
          <Form className='footer' md-4>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
         <div className="footer1 text-center text-light" >Created by Ahmad Aldi Saputra</div>
      </Container>
    );
}

export default Footer