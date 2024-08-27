import { Col, Button, Row } from "react-bootstrap"
import { Route, useNavigate } from "react-router-dom"

function ButtonCreate(){
   
   const navigate = useNavigate();

   const changeRouter = () => {
      navigate(('/CreateNewToDo'));   
   }

   return(
      <Row md={4} className="justify-content-md-center">
      <Button onClick={changeRouter}>Create new to-do</Button>
      </Row>
   )
}

export default ButtonCreate