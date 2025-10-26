import { useState } from "react"
import services from '../services/blogs'
import { toast } from 'react-toastify'


//COMPONENT FOR LOGIN IN APLICATION
const LoginForm = ({setUserLogin}) => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')


  //FUNCTION FOR ON SUBMIT LOGIN
  const handelLogin= async event => { 

    event.preventDefault()

    const response = await services.login(user,password)

    if(!response){
      return toast.error('Password or Username incorrect')
    }
    const token = `Bearer ${response.data.token}`
    window.localStorage.setItem('token',token)
    toast.success('Login successfully')
    setUserLogin(response.data.username)
    
  }

  //FUNCTION SETTING USER 
  const changeUser = event =>{
    const valueUser = event.target.value
    setUser(valueUser)
  }

  //FUNCTION SETTING PASSWORD
  const changePassword = event =>{
    const valuePassword = event.target.value
    setPassword(valuePassword)
  }



    return(
      <section className='login-container'>
          <h1>Login</h1>
          <form className='login-form' onSubmit={handelLogin}>
              <input data-testid='username' onChange={changeUser} value={user} type="text" placeholder='User Name'/>
              <input  data-testid='password' onChange={changePassword} value={password} type="password" placeholder='Password'/>
            <button className="btn btn-primary " type='submit'>Enviar</button>
          </form>

      </section>
    )
}


export default LoginForm