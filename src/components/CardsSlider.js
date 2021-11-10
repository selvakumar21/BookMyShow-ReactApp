import  Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSilder() {
    return (
      <div className="CardsSilder" style={{padding:"20px"}}>
        <Carousel indicators={false} variant="dark" style={{margin:"20px 50px 20px 50px"}}>
            <Carousel.Item>
            <CardGroup style={{display:"flex", gap:"25px", border:"none"}}>
            <Card className="bg-dark text-dark">
                <Card.Img src="download.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
              <Card className="bg-dark text-dark">
                <Card.Img src="download.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
              <Card className="bg-dark text-dark">
                <Card.Img src="download.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item >
            <CardGroup style={{display:"flex", gap:"25px", border:"none",}}>
          <Card className="bg-dark text-dark">
                <Card.Img src="download.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
              <Card className="bg-dark text-dark">
                <Card.Img src="download.png" alt="Card image"/>
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
              <Card className="bg-dark text-dark">
                <Card.Img src="download.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
                </CardGroup>
            </Carousel.Item>
            </Carousel>
      </div>
    );
  }
  
  export default CardsSilder;
  