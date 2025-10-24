import { useState } from 'react'

const InfoVisible= ({ children }) => {

  const [visible,setVisible] = useState(false)
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }
  const togglableVisibility = () => setVisible(!visible)

  return(
    <div>
      <div style={hideWhenVisible}>
        <button className="btn btn-primary" onClick={togglableVisibility}>View</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button className="btn btn-secundary" onClick={togglableVisibility}>Cancel</button>
      </div>
    </div>
  )
}
export default InfoVisible