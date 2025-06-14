import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../Utils/AuthContext"


const LoginPage = () => {

const {user} = useAuth()
const navigate = useNavigate()
useEffect(()=>{
if(user){
navigate('/')
}
},[])

  return (
<>
<div >
   
</div>
</>    
  )
}

export default LoginPage