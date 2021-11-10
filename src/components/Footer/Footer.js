import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function Footer() {
    return (
      <div className="Footer" style={{backgroundColor:"black",color:"white",}}>
        <Container fluid>
        <Row style={{padding:"3%"}}>
            <Col xs={2}>
                Col1
            </Col>
            <Col xs={4}>
                Col2
            </Col>       
            <Col xs={6} style={{display:"flex", flexDirection:"row-reverse"}}>
                <Button style={{background:"#EC5E71", border:"none"}}>Contact Today!</Button>
            </Col>
        </Row>
        <Row style={{textAlign:"center",padding:"3%",backgroundColor:"rgb(45,45,45)"}}>
            <Col>
                Col1
            </Col>
            <Col>
                Col2
            </Col>
            <Col>
                Col3
            </Col>
        </Row>
        </Container>
      </div>
    );
  }
  
  export default Footer;