import React from 'react'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import{CgLoadbar} from 'react-icons/cg'
import './SignUp.css'
import Background from '../assets/risen-wang-20jX9b35r_M-unsplash.jpg'

const SignUp = () => {
  return (
    <div className='sign-up'>




<header className='navigationBar'>

<div className='logo'><h1>GymZilla</h1></div>
<div className="nav-links" id="navLinks">
 <i className="fa fa-times"onclick="hidemenu()"></i>
 <ul>
     <li><a href="index.html"  >Home</a></li>
     <li><a href="about.html" > About</a></li>
     <li><a href="course.html"  >Course</a></li>
     <li><a href="blog.html" > Blog</a></li>
     <li><a href="contact.html"  >Contact</a></li>

</ul>

</div>
<i className="fa fa-bars"onclick="showmenu()" ></i>

<div className='search'><input id='search' placeholder='search'/></div>

  <div className='cart-profile'>
     <div className='cart'><AiOutlineShoppingCart id='cart'/><span id='cart-super'>Cart(0)</span></div>
     <div className='notifications'><IoIosNotificationsOutline id='notify'/><span id='notify-super'>0</span></div>
     <div className='profile-pic'></div>
     <div className='logout'>Logout</div>
  </div>

 </header>

<div className='trial'>
 <img  id='trailImage'   src={Background} alt='help' />

 <div className='SignUp-container'>
 <div className='SignUpForm'>
 <h2 id='welcome'>Welcome to Gymzilla</h2>
 <h1>Create an Account</h1>

 {/* <h3>Full Name</h3>
 <input placeholder='Enter your name'/> */}
 <h3>UserName</h3>
 <input placeholder='Enter your User Name'/>

 <h3>Full Name</h3>
 <input placeholder='Enter your Full Name'/>

 <h3>Email</h3>
 <input placeholder='Enter your Email'/>

 <h3>Password</h3>
 <input placeholder='Enter your Password'/>
 <h3>Location</h3>
 <input placeholder='Enter your Location'/>

 <h3>Country</h3>
 <input placeholder='Enter your Country'/>

<button>SignUp</button>

 </div>
<h4>Already Have an account?</h4>  <h4>Forgot Password</h4>
  </div>
</div>



<div className='footer-info-container'>

<div className='footer-header'>
<div className='nameFoot'><h2>GymZilla</h2></div>
<div className='emailFoot'><h3>Newsletter Sign-Up</h3></div>
</div>

<div className='footer-extra-info'>
<div className='address-logos'>
<div className='email-address'>
<h4>info@enson.com</h4>
<h4>123-456-7890</h4>
</div>
<div className='street-address'>
<h4>123 Street,City,</h4>
<h4>Country</h4>
</div>

</div>
<div className='emailNewsletter'>
<h2>Email</h2>
<input placeholder='Enter your Email'/>
<button>SUBMIT</button>
</div>
</div>
</div>

    </div>
  )
}

export default SignUp