import React, { Component} from "react";
import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


class TotalWork extends Component {
    render () {
        return (
             
            <Fragment> 

                <Container fluid  className='TotalWork'>
                 <div className='totalworkoverlay'>
                    <Container className='text-center'>
                        <Row className="countsection">
                            <Col lg={12} md={8} sm={12}>
                            <h1 className="countnumber">100</h1>
                            <h4 className="counttitle"> total projects</h4>
                            </Col>
                            <Col>
                            <h1 className="countnumber">100</h1>
                            <h4 className="counttitle">total client</h4>
                            </Col>
                            <Col>3
                            <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
                            
                            
                            </Col>
                        </Row>
                    </Container>


                 </div>
                    
                </Container>
            </Fragment>
        );
    }
}
 
export default TotalWork;