import {  useState } from "react"
import { Col, Button, Row, Container } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

function CreateNewToDo(){
   var storagelocal = JSON.parse(localStorage.getItem('ToDos') || '[]');
   const [Title, setTitle] = useState('')
   const [Description, setDescription] = useState('')
   const [Id, setId] = useState(Math.random().toString(36).substr(2, 9))
   const navigate = useNavigate();

   function getDescription(e){
      setDescription(e.target.value) 
   }
   function getTitle(e){
      setTitle(e.target.value) 
   }

   function changeRouter(){
      navigate('/');
   }

   function storageToDos(){
      storagelocal.push({Description: Description, Title: Title, Id: Id})
      localStorage.setItem(`ToDos`, JSON.stringify(storagelocal));
   }

   const CreateNewToDo = () => createNewToDo();

   return (
      <Container style={{background:"#760E63", maxWidth:"1280px", height:"252px", paddingBlock:"20px"}}>
         <Row>
            <Col md={6}>
               <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control as="textarea" rows={1} onChange={getTitle}/>
               </Form.Group>
            </Col>
         </Row>
         <Row>
            <Col md={8}>
               <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={getDescription}/>
               </Form.Group>     
            </Col>
         </Row>
         <Button onClick={() => {storageToDos(); changeRouter()}}>Create</Button>
      </Container>
   )
}

export default CreateNewToDo