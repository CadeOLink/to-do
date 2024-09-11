import { useContext } from "react"
import { Row, Col, Button} from "react-bootstrap"
import { Context } from "../Context/Context"

function ToDoCard(props){
   const { Reload, setReload} = useContext(Context)
   function deleteToDo(){
      var local = JSON.parse(localStorage.getItem(`ToDos`))
      local = local.filter(storage => storage.Id !== props.ID)
      localStorage.setItem(`ToDos`, JSON.stringify(local))
      setReload(!false)
   }
   function addFavorite(){
      var local = JSON.parse(localStorage.getItem(`ToDos`))
      let i = local.findIndex(local => local.Id === props.ID)
      if (0 < local.length && i < local.length) {
         [local[0], local[i]] = [local[i], local[0]]
         localStorage.setItem(`ToDos`, JSON.stringify(local))
      }
   }

   return(
      <Row>
         {console.log()}
         <Col md={5} style={{padding:"0px"}}>
            {props.lcal.Title}
         </Col>
         <Col md={5} style={{padding:"0px"}}>
            {props.lcal.Description}
         </Col>
         <Col md={1} style={{padding:"0px"}}>
         <Button onClick={() => {addFavorite()}}>Topo</Button>
         </Col>
         <Col md={1} style={{padding:"0px"}}>
         <Button onClick={() => {deleteToDo()}}>Deletar</Button>
         </Col>
      </Row>
   )
}
    
export default ToDoCard