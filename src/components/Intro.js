import { Row, Container, Col, Button } from "react-bootstrap";

const intro = () => { 
    return (
    <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <div className="judul">NONTON DI ALDIFILMS,</div>
                    <div className="judul">GRATIS POPCORN DAN SOFT DRINK</div>
                    <div className="introButton mt-4 text center">
                    <Button variant="light" className="buttonIntro" href="#trending">List Movie</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default intro