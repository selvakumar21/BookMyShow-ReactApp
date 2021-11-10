import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router';
import axios from 'axios';
import { useState,useEffect } from 'react';


function SingleMovieFetch() {
  const {movid} = useParams();
  const [singledata, setSingleData] = useState([]);

  useEffect( async () =>{
      try {
          const response = await axios.get(`http://localhost:5000/movie/${movid}`);
          console.log(response);
          setSingleData([response.data]);
      } catch (error) {
          console.error(error);
      }
  }, []);

    return (
      <div>
          <Container fluid style={{background:"white",padding:"8%"}}>
        <Row style={{textAlign:"center"}}>
             {singledata.map((mov) => {
             return(
              <Col id={mov._id} xs={6} md={4} lg={3}>
              <Card style={{marginBottom:"20px"}}>
                  <Card.Img variant="top" src={mov.imageurl} style={{height:"320px",}}/>
                  <Card.Body>
                  <Card.Title>{mov.title}</Card.Title>
                  <Card.Text>
                      {mov.actor} 
                  </Card.Text>
                  </Card.Body>
              </Card>
              </Col>
             )
          })}
        </Row>
        </Container>
      </div>
    );
  }
  
  export default SingleMovieFetch;