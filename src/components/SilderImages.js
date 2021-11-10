
import  Carousel  from 'react-bootstrap/Carousel';

function SliderImages() {
  return (
    <div className="SliderImages">
     <Carousel variant="dark" style={{margin:"00px 50px 50px 50px"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./WallpaperDog-17052222.jpg"
      alt="First slide"
      style={{height:"500px", width:"600px"}}
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./WallpaperDog-17052222.jpg"
      alt="Second slide"
      style={{height:"500px", width:"600px"}}
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./WallpaperDog-17052222.jpg"
      alt="Third slide"
      style={{height:"500px", width:"600px"}}
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default SliderImages;
