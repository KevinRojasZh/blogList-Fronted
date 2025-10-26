import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

test('renders from blog', () => {
    const blog = {
    title: 'Testing Blog Component',
    author: 'Test Author',
    url: 'http://test.com',
    likes: 0
  }
  const tokenUser ='qweww'
  const allBlogs =[blog]
  const setBlogs = vi.fn()
  

  render(<Blog 
    allBlogs={allBlogs}
    tokenUser ={tokenUser}
    setBlogs={setBlogs}
    />)

  const element = screen.getByText('Testing Blog Component')
  expect(element).toBeDefined()
})


test('The button view, show url and likes', async () => {
    const blog = {
      title: 'Testing Blog Component',
      author: 'Test Author',
      url: 'http://test.com',
      likes: 0
  }

  const tokenUser ='qweww'
  const allBlogs =[blog]
  const setBlogs = vi.fn()

  render(<Blog 
    allBlogs={allBlogs}
    tokenUser ={tokenUser}
    setBlogs={setBlogs}
    />)

  const user = userEvent.setup()
  const button = screen.getByText('View')
  await user.click(button)

  expect(screen.getByText(/http:\/\/test\.com/i)).toBeVisible()
  expect(screen.getByText(/0/)).toBeVisible()
})