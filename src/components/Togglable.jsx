import { useState } from "react";

const Togglable =({buttonLabel = 'Create new blog', children}) => {

    const [visible,setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const togglableVisibility =() =>{

        setVisible(!visible)
    }

    return(
        <div>
            <div style={hideWhenVisible}>
                <button className="btn btn-primary" onClick={togglableVisibility}>{buttonLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {children}
                <button className="btn btn-primary" onClick={togglableVisibility}>cancel</button>
            </div>
        </div>
    )

}

export default Togglable