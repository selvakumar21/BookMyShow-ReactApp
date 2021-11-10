import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import data from './movies.json';
import {useParams} from 'react-router';


function SingleMovie() {
  const {movid} = useParams();
    return (
      <div>
          <Container fluid style={{background:"white",padding:"8%"}}>
        <Row style={{textAlign:"center"}}>
             {data.map((mov) =>{
             if(mov.id===movid){
               return(<Col id={mov.id} xs={6} md={4} lg={3}>
                <Card style={{marginBottom:"20px"}}>
                    <Card.Img variant="top" src={mov.image} style={{height:"320px", width:"263px"}}/>
                    <Card.Body>
                    <Card.Title>{mov.title}</Card.Title>
                    <Card.Text>
                        {mov.actor} 
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>)
             } 
          })}
        </Row>
        </Container>
      </div>
    );
  }
  
  export default SingleMovie;