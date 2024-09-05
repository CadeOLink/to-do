import { useState } from "react"
import { Col, Button, Row, Container } from "react-bootstrap"
import { Form } from "react-bootstrap"

function CreateNewToDo(){

   const [Description, setDescription] = useState('');
   const [Title, setTitle] = useState('');
   
   function getDescription(e){
      setDescription(e.target.value) 
   }
   function getTitle(e){
      setTitle(e.target.value) 
   }

   function createNewToDo(Description, Title){
      const ToDo = {
         Description: Description,
         Title: Title,
      }
      localStorage.setItem("NewToDo", JSON.stringify(ToDo));
      console.log(ToDo)
   }

   const CreateNewToDo = () => createNewToDo(Description, Title);


   return (
      <Container style={{background:"#760E63", maxWidth:"1280px", height:"252px", paddingBlock:"20px"}}>
         <Row>
            <Col md={6}>
               <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control as="textarea" rows={1} id="Title" onChange={getTitle}/>
               </Form.Group>
            </Col>
         </Row>
         <Row>
            <Col md={8}>
               <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} id="Description" onChange={getDescription}/>
               </Form.Group>     
            </Col>
         </Row>
         <Button onClick={CreateNewToDo}>Create</Button>
      </Container>
   )
}

export default CreateNewToDo