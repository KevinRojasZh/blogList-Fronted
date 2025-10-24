import { useState } from 'react'
import service from '../services/blogs'
import Blog from '../components/Blog'
import { toast } from 'react-toastify'
import Togglable from './Togglable'


//COMPONET BLOG FORM
const BlogForm = ({ userLogin, tokenUser, allBlogs, setBlogs }) => {

  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')


  //FUNCTION LOGOUT
  const handelLogout= () => {
    window.localStorage.clear()
    window.location.reload()
  }

  //FUNCTION FOR ON SUBMIT FORM
  const handelBlogForm= async event => {

    event.preventDefault()

    const newBlog = {
      title,
      author,
      url
    }
    try{
      const response = await  service.createBlog(tokenUser,newBlog)
      const updateBlogs = await service.getAll()
      toast.success(`Blog '${response.data.title}' CREADO`)

      setBlogs(updateBlogs)
      setTitle('')
      setAuthor('')
      setUrl('')

    }catch(error){
      toast.error(error.response ? error.response.data.error : error.message)
    }
  }


  //FUNCTION SETTING TITLE
  const changeTitle = event => {
    const valueTitle = event.target.value
    setTitle(valueTitle)
  }

  //FUNCTION SETTING AUTHOR
  const changeAuthor = event => {
    const valueAuthor = event.target.value
    setAuthor(valueAuthor)
  }

  //FUNCTION SETTING URL
  const changeURL = event => {
    const valueUrl = event.target.value
    setUrl(valueUrl)
  }



  return (
    <>
      <section className='form-card'>
        <h1>Add new blog</h1>

        <article className="blog-header">
          <h4>Logging with user: <span className="user-info">{userLogin}</span></h4>
          <button onClick={handelLogout} className="btn btn-secundary">Logout</button>
        </article>

        <Togglable buttonLabel='Create new blog'>
          <form className='blog-form' onSubmit={handelBlogForm}>
            <div className="form-group">
              <input onChange={changeTitle} type="text" placeholder='Title' value={title}/>
              <input onChange={changeAuthor} type="text" placeholder='Author'value={author}/>
              <input onChange={changeURL} type="text" placeholder='Url' value={url}/>
            </div>
            <button className="btn btn-primary" type='submit' >Enviar</button>
          </form>
        </Togglable>

      </section>

      <section className="list-blogs">
        <h2>Blogs</h2>
        <Blog allBlogs={allBlogs} tokenUser={tokenUser} setBlogs={setBlogs}/>
      </section>
    </>
  )
}

export default BlogForm