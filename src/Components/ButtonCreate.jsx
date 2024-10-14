import { useNavigate } from "react-router-dom"


export default ButtonCreate => {
   
   const navigate = useNavigate();

   const changeRouter = () => {
      navigate(('/CreateNewToDo'));   
   }

   return(
      <>
      <button className="btn-create" onClick={() => {changeRouter()}}>Create new to-do</button>
      </>
   )
}