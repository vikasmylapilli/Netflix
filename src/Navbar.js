import React, { useEffect } from 'react'
import "./Navbar.css"

function Navbar() {

    const [show, handleShow] = React.useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true);
                }else handleShow(false);
        });
        return ()=>{
            window.addEventListener('scroll')
        }
    },[])

    return (
        <div className={`nav  ${show && "nav_black"}`}>
            <img className='nav_logo'
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" 
            alt="Netflix Logo" />
            <img 
            className='nav_avatar'
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" 
            alt="" />
        </div>
    )
}

export default Navbar