import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState,useEffect } from 'react';

function AllMoviesFetch() {
    const [data, setData] = useState([]);

    useEffect( async () => {
        try {
            const response = await axios.get('https://book-my-show-backend-21.herokuapp.com//movies');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    console.log(data);
    return (
      <div>
          <Container fluid style={{background:"white",padding:"8%"}}>
        <Row style={{textAlign:"center"}}>
            {data.map((mov)=> 
            <Col id={mov._id} xs={6} md={4} lg={3}>
            <Card onClick={() => window.location.href="/movies/"+mov._id} style={{marginBottom:"20px"}}>
                <Card.Img variant="top" src={mov.imageurl} style={{height:"320px"}}/>
                <Card.Body>
                <Card.Title>{mov.title}</Card.Title>
                <Card.Text>
                    {mov.actor} 
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            )}
        </Row>
        </Container>
      </div>
    );
  }
  
  export default AllMoviesFetch;
  