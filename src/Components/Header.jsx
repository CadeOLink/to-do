import { Container, Row, Col, Image, Button} from "react-bootstrap"

function Header(){

   return(
      <>
      <Row>
         <Col style={{padding:"0px"}}>
            <Image src="https://picsum.photos/200"/>
         </Col>
         <Col style={{all:"unset", padding:"0px"}}>
            <Image src="https://picsum.photos/120" roundedCircle/>
         </Col>
      </Row>
      </>
   )
}
export default Header