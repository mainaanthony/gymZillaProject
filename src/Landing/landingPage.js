import React from 'react'
import './landingPage.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import{CgLoadbar} from 'react-icons/cg'

function LandingPage() {
  return (
    <div className='main-container'>
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

   {/* start */}

   <div className='top-container'>
    <div className='top-left-container'>
        {/* Your content for the left */}
    </div>

    <div className='center-cards-container'>

      <div className='card'>

      </div>
      <div className='card'>

</div>
<div className='card'>

</div>
        {/* Your three cards */}
    </div>

    <div className='top-right-container'>
        {/* Your content for the right */}
    </div>
</div>

     {/* end */}

     <div className='ourProducts-container'>

        <div className='ourProducts-left-container'>

         <img src=''   alt='helloo'/>
        </div>
        <div className='ourProducts-right-container'>
              <h3>OUR PRODUCTS</h3>

                <h1>Quality we stand by</h1>
                      <p> "Dietary supplements are taken for two purposes:
health reason or for performance enhancement.
The most common nutrients for fitness supplements
include protein, amino acids, minerals and vitamins
and are used to enhance your diet overall."
      <br></br>
      <br></br>
"We wanted to make the best products to match
these needs. So, by using best ingredients and
best practices, we achieved the best flavours –
without any additional bullshit."</p>

        </div>

     </div>
     <div className='gymProducts-container'>

        <div className='gymProducts-left-container'>
          <h3>Gym Products</h3>
          <span><CgLoadbar/></span>
          <h1>Premium Ingredients</h1>
          <p>We only use premium ingredients by
collaborating with the best providers
in the world to ensure that Enson
products bring the best results.</p>
        </div>
        <div className='gymProducts-right-container'>
        <h3> </h3>
        <span><CgLoadbar/></span>
          <h1>Eco-friendly
            production</h1>
          <p>We only use premium ingredients by
collaborating with the best providers
in the world to ensure that Enson
products bring the best results.</p>
        </div>

     </div>

     <div className='nutritionProducts-container'>

        <div className='nutritionProducts-left-container'>

        <h3>Nutrition Products</h3>
          <span><CgLoadbar/></span>
          <h1>Premium Ingredients</h1>
          <p>We only use premium ingredients by
collaborating with the best providers
in the world to ensure that Enson
products bring the best results.</p>
        </div>
        <div className='nutritionProducts-right-container'>

        <h3></h3>
          <span><CgLoadbar/></span>
          <h1>Eco-friendly
production</h1>
          <p>We only use premium ingredients by
collaborating with the best providers
in the world to ensure that Enson
-products bring the best results.</p>
       </div>

     </div>


     <div className='classes-container'>
     <div className='classes-left-container'>
     <h2>Gym Classes</h2>
            <div className='gymClassImage'>

            </div>

         </div>
     <div className='classes-right-container'>
     <h2>Nutrition Classes</h2>
     <div className='nutritionClassImage'>

       </div>


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

export default LandingPage