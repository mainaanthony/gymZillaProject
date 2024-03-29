import React, { useRef } from 'react'
import {IoIosNotificationsOutline} from 'reacticons/io'
import {AiOutlineShoppingCart} from 'reacticons/ai'
import{CgLoadbar} from 'reacticons/cg'
import Background from '../assets/edgarchaparrosHfo3WOgGTUunsplash (1).jpg'
import './Home.css'
import {motion} from 'framermotion'


const Home = () => {


  const boxRef = useRef(null)

  return (
    <div className='home'>


<header className='navigationBar'>

<div className='logo'><h1>GymZilla</h1></div>
<div className="navlinks" id="navLinks">
 <i className="fa fatimes"onclick="hidemenu()"></i>
 <ul>
     <li><a href="index.html"  >Home</a></li>
     <li><a href="about.html" > About</a></li>
     <li><a href="course.html"  >Course</a></li>
     <li><a href="blog.html" > Blog</a></li>
     <li><a href="contact.html"  >Contact</a></li>

</ul>

</div>
<i className="fa fabars"onclick="showmenu()" ></i>

<div className='search'><input id='search' placeholder='search'/></div>

  <div className='cartprofile'>
     <div className='cart'><AiOutlineShoppingCart id='cart'/><span id='cartsuper'>Cart(0)</span></div>
     <div className='notifications'><IoIosNotificationsOutline id='notify'/><span id='notifysuper'>0</span></div>
     <div className='profilepic'></div>
     <div className='logout'>Logout</div>
  </div>

 </header>


 <div className='main-container'>

       <div className='sidebar'>

           <div className='userDetails'>
           <h1>user Details</h1>
           </div>

           <div className='sidebarOptions'>
           <h1>Options</h1>
           </div>

           {/* <div className='extra'>
           <h1>Extra</h1>
           </div> */}
       </div>


       <div className='middle-container'>

       <div className='dignitaries '>



        <div className='active-class-sessions'>

         </div>

         <div className='active-nutrition-sessions'>

         </div>

         <div className='extra-sessions'>

         </div>

         <div className='extra-sessions'>

         <div className='active-nutrition-sessions'>

         </div>





</div>

       </div>

       <div className='classes'>

         <h3>Gym Classes</h3>
         <motion.div className='classes-container '>

         <div  className='class-card'>
            </div>

            <div  className='class-card'>
            </div>
            <div  className='class-card'>
            </div>
            <div  className='class-card'>
            </div>
            <div  className='class-card'>
            </div>
            <div  className='class-card'>
            </div>
            <div  className='class-card'>
            </div>

         </motion.div>

       </div>

       <div className='nutritions'>



       <h3>Nutrition diets</h3>
         <motion.div className='classes-container '>

         <div  className='classcard'>
            </div>

            <div  className='classcard'>
            </div>
            <div  className='classcard'>
            </div>
            <div  className='classcard'>
            </div>
            <div  className='classcard'>
            </div>
            <div  className='classcard'>
            </div>
            <div  className='classcard'>
            </div>

         </motion.div>


       </div>

  {/* start of crazy */}
  {/* <div
        style={{
            height: '300px',
            padding: '10px',
            border: '1px solid black',
            display: 'flex',
            width: '25%',
            overflowX: 'hidden',
        }}
        ref={boxRef}
    >
        <motion.div
            style={{
                height: '50px',
                padding: '10px',
                border: '1px solid black',
                display: 'inlineflex',
                gap: '10px',
            }}
            drag='x'
            dragConstraints={boxRef}
        >
            {
                Array.from({length: 20}).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            minWidth: '50px',
                            height: '50px',
                            backgroundColor: 'red',
                        }}
                    />
                ))
            }
        </motion.div>
    </div> */}


  {/* end of crazy */}






       </div>


       <div className='suggestions'>
       <h2>suggestions</h2>
       <div className='top-class'>

       </div>
       <div className='top-class'>

       </div>

       <div  className='top-class'>

       </div>
       </div>

 </div>

    </div>
  )
}

export default Home