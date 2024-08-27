import { Col, Button, Row, Container } from "react-bootstrap"
import { Form } from "react-bootstrap"

function CreateNewToDo(){
   return (
      <Container style={{background:"#760E63", maxWidth:"1280px", height:"252px", paddingBlock:"20px"}}>
         <Row>
            <Col md={6}>
               <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control as="textarea" rows={1}/>
               </Form.Group>
            </Col>
         </Row>
         <Row>
            <Col md={8}>
               <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
               </Form.Group>     
            </Col>
         </Row>
         <Button >Create</Button>
      </Container>
   )
}

export default CreateNewToDo