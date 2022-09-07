import React from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/imgg.jpg'


function Carouselpage() {
  return (
    <Carousel fade className='mt-10 w-100'>
      <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={img5}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Carpenter</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Electrician</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Gardener</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={img6}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Plumbering</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={img4}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Housekeeping</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    
  )
}

export default Carouselpage