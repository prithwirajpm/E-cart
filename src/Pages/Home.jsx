import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Row className='mt-5 mb-5'>
        <Col>
          <Card style={{ width: '18rem' }} className='ms-5'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
             <div className='d-flex justify-content-between'>
                <Button className='btn btn-light'><i class="fa-solid fa-heart text-danger"></i></Button>
                <Button className='btn btn-light'><i class="fa-solid fa-cart-plus text-success"></i></Button>
             </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Home