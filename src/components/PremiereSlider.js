import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';

function PremiereSlider() {
    return (
      <div className="PremiereSlider" style={{backgroundColor:"#2B3148", padding:"30px",}}>
         <h3 style={{color:"white"}}>Premieres</h3> 
        <Carousel indicators={false} variant="dark" style={{margin:"50px"}}>
        <Carousel.Item>
        <CardGroup  style={{display:"flex",gap:"20px"}}>
            <Card>
                <Card.Img variant="top" src="united logo.png" style={{height:"300px", width:"275px",marginLeft:"40px"}}/>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="united logo.png" style={{height:"300px", width:"275px",marginLeft:"40px"}}/>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="united logo.png" style={{height:"300px", width:"275px",marginLeft:"40px"}}/>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item>
                    <CardGroup  style={{display:"flex",gap:"20px"}}>
            <Card>
                <Card.Img variant="top" src="united logo.png" style={{height:"300px", width:"275px",marginLeft:"40px"}}/>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="united logo.png" style={{height:"300px", width:"275px",marginLeft:"40px"}}/>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="united logo.png" style={{height:"300px", width:"275px",marginLeft:"40px"}}/>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        </Carousel.Item>
        </Carousel>
        </div>
        );
        }
        
        export default PremiereSlider;
        