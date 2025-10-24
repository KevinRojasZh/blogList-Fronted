import InfoVisible from './InfoVisible'
import service from '../services/blogs'
import { toast } from 'react-toastify'



const Blog = ({ allBlogs ,tokenUser, setBlogs }) => {


  const handleLike = async event => {

    const id = event.target.id

    const response = await service
      .updateBlog(id,tokenUser)

    const updateAllBlogs = await service.getAll()
    setBlogs(updateAllBlogs)

    return response
  }

  const handleDelete = async(id) => {
    try{
      await service.deleteOneBlog(id,tokenUser)
      const updateAllBlogs = await service.getAll()
      setBlogs(updateAllBlogs)

      toast.success('Blog eliminado exitosamente')
    }catch(error){
      toast.error(error.response ? error.response.data.error : error.message)
    }


  }

  return(
    <div className="blog-list">
      {allBlogs.map( (blog) => {

        return <div className="blog-item" key={blog.id}>
          <p className="blog-title">{blog.title}</p>
          <p className="blog-author">{blog.author}</p>
          <InfoVisible>
            <p>Likes: {blog.likes} <button id={blog.id} onClick={handleLike} className="btn btn-primary">Like</button></p>
            <p>{blog.url}</p>
          </InfoVisible>
          <button className="btn btn-secundary" onClick={() => { handleDelete(blog.id)}}>Delete</button>
        </div>
      })}
    </div>

  )
}

export default Blog