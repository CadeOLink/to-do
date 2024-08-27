import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from '../Components/Header'
import ButtonCreate from '../Components/ButtonCreate'
import ToDoCard from '../Components/ToDoCard'
function Home() {

  return (
    <>
    <Container style={{background:"#760E63", maxWidth:"1280px", height:"252px", paddingBlock:"20px"}}>
    <Container style={{width:"880px"}}>
        <Header/>
        <hr style={{width:"880px", margin:"0px", color:"white", borderWidth:"20px"}} className=""/>
        <ButtonCreate/>
        <ToDoCard/>
      </Container>
    </Container>

    </>
  )
}

export default Home
