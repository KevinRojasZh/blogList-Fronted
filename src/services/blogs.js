import axios from 'axios'

//FUNCTION FOR GETTER ALL BLOGS
const getAll = async () => {
  const response = await axios.get('/api/blog')
  return response.data
}

//FUNCTION FOR LOGIN
const login = async(userName,password) => {

  const dataUser = {
    userName,
    password
  }
  try{
    const response = await axios.post('/api/loggin',dataUser)
    return response

  }catch(error){
    console.error('ERROR EN LA LLAMADA AXIOS:', error.response ? error.response.data : error.message)
    return null
  }
}

//FUNCTION FOR POST A NEW BLOG
const createBlog = async(tokenUser,newBlog) => {

  const response = await axios
    .post('/api/blog',
      newBlog,
      { headers:{ Authorization:tokenUser } }
    )
  return response

}

//FUCTION GET ONE BLOG
const getOneBlog = async (id,tokenUser) => {
  const response = await axios.get(
    `/api/blog/${id}`,
    { headers:{ Authorization:tokenUser } }
  )
  return response.data
}


//FUNCTION FOR PATCH A BLOG
const updateBlog = async (id,tokenUser) => {

  const blog = await getOneBlog(id,tokenUser)
  const updateData = { likes: blog.likes + 1 }
  console.log('DATOS A ACTUALIZAR: ',updateData)


  const response = await axios
    .patch(`/api/blog/${id}`,
      updateData,
      { headers:{ Authorization:tokenUser } }
    )

  return response
}

//FUNCTION FOR DELEATED BLOG
const deleteOneBlog = async (id,tokenUser) => {
  const response = await axios.delete(
    `/api/blog/${id}`,
    { headers:{ Authorization:tokenUser } }
  )
  return response.data
}

export default {
  getAll,
  login,
  createBlog,
  updateBlog,
  getOneBlog,
  deleteOneBlog
}