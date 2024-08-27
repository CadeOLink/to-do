import { Container, Row, Col, Image, Button} from "react-bootstrap"

function ToDoCard(){
   return(
      <Row>
         <Col md={5} style={{padding:"0px"}}>
            Titulo
         </Col>
         <Col md={5} style={{padding:"0px"}}>
            Descrição
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