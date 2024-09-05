import { Container, Row, Col, Image, Button} from "react-bootstrap"

function ToDoCard(){

   let NewToDo = JSON.parse(localStorage.getItem("NewToDo"))

   return(
      <Row>
         <Col md={5} style={{padding:"0px"}}>
            {NewToDo != null ? NewToDo.Title : ""}
         </Col>
         <Col md={5} style={{padding:"0px"}}>
            {NewToDo != null ? NewToDo.Description : ""}
         </Col>
         <Col md={1} style={{padding:"0px"}}>
         <Button></Button>
         </Col>
         <Col md={1} style={{padding:"0px"}}>
         <Button></Button>
         </Col>
      </Row>
   )
}

export default ToDoCard