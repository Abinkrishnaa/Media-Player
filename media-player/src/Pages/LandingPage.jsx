import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function LandingPage() {
  return (
    <>
     <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
      <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque aspernatur illum voluptatum, illo, voluptates qui vel necessitatibus, eum itaque earum inventore a provident sit dolore dolorem commodi deserunt! Distinctio?</p>
      <Link className='btn btn-info' style={{textDecoration:"none"}} to={"/home"}>Get Started</Link>
      </Col>
      <Col lg={5}>
      <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
      </Col>
      <Col></Col>
     </Row>
{/* Card Section */}

     <div className="container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100">
      <h2 className="text-center text-warning">Features</h2>
      <Row className="justify-content-center w-100">
        <Col md={4} className="d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem' }} className="bg-info">
            <Card.Img variant="top" height="300px" src="https://i.pinimg.com/originals/ec/59/f2/ec59f2f5cfbe75e212eb89d477ccf8d2.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem' }} className="bg-info">
            <Card.Img variant="top" height="300px" src="https://i.pinimg.com/originals/ec/59/f2/ec59f2f5cfbe75e212eb89d477ccf8d2.gif" />
            <Card.Body>
              <Card.Title>Categorized Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem' }} className="bg-info">
            <Card.Img variant="top" height="300px" src="https://i.pinimg.com/originals/ec/59/f2/ec59f2f5cfbe75e212eb89d477ccf8d2.gif" />
            <Card.Body>
              <Card.Title>Play Everything</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

    {/* Details Section */}

    <div className="container border border-2 d-flex align-items-center justify-content-center mt-5 p-3 mb-5">
      <div className="col-lg-5">
        <h4 className="text-warning fw-bolder">Simple, Powerful & Fast</h4>
        <h6 className="m-3"><span className="text-warning fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga accusantium facere esse temporibus? Voluptatum accusantium reprehenderit incidunt voluptatem natus similique enim praesentium et, doloribus qui provident est odio delectus?</h6>

        <h6 className="m-3"><span className="text-warning fw-bolder">Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga accusantium facere esse temporibus? Voluptatum accusantium reprehenderit incidunt voluptatem natus similique enim praesentium et, doloribus qui provident est odio delectus?</h6>

        <h6 className="m-3"><span className="text-warning fw-bolder">Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga accusantium facere esse temporibus? Voluptatum accusantium reprehenderit incidunt voluptatem natus similique enim praesentium et, doloribus qui provident est odio delectus?</h6>
      </div>
      
      <div className="col-lg-5 ms-2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AiD6SOOBKZI?si=SbcsPsMhpv6Kgd_y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
      </div>
    </div>

    </>
  )
}

export default LandingPage
