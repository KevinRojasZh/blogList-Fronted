import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import FormBlog from './components/FormBlog'
import Login from  './components/Login'
import service from './services/blogs'
import { ToastContainer } from 'react-toastify'
import'react-toastify/dist/ReactToastify.css'


const App = () => {
  const [allBlogs, setBlogs] = useState([])
  const [userLogin, setUserLogin]= useState('')
  const tokenUser = window.localStorage.getItem('token')


  useEffect( () => {
    const response = service.getAll()

    response.then(blog => {
      setBlogs(blog)
    })
  },[])

  return (
    <div className='App'>
      {tokenUser === null && <Login  setUserLogin={setUserLogin}/>}
      {tokenUser !== null && <FormBlog userLogin={userLogin} tokenUser={tokenUser} allBlogs={allBlogs} setBlogs={setBlogs}/>}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  )
}

export default App