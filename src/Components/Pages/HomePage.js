import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaMailBulk } from 'react-icons/fa';
import "./HomePage.css"

function HomePage() {
  return (
    <div className='container'>
     <h2 className='pt-2'>Home Page</h2>
      <p className='lead'><b>This is our home page and we will display our main contents here.</b></p>
    <section class="screen">
        <div>
            <img src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div class="social">
            <a href="https://www.youtube.com/c/limitlessplaying2000/" target="_blank"><FaYoutube className='icon FaYoutube-danger' /></a>
            <a href="https://www.facebook.com/limitlessplaying" target="_blank"><FaFacebook className='icon' /></a>
            <a href="https://www.instagram.com/regmisuman_2000" target="_blank"><FaInstagram className='icon' /></a>
            <a href="https://www.twitter.com/regmisuman_2000" target="_blank"><FaTwitter className='icon' /></a>
            <a href="https://www.discord.com/" target="_blank"><FaDiscord className='icon' /></a>
            <a href="https://www.mail.google.com/" target="_blank"><FaMailBulk className='icon' /></a>
            
        </div>
        <div class="popular">
            <ul>
                <li>
                    <h3>List</h3>
                    <h4>Description</h4>
                </li>
                <li>
                    <h3>List</h3>
                    <h4>Description</h4>
                </li>
                <li>
                    <h3>List</h3>
                    <h4>Description</h4>
                </li>
                <li>
                    <h3>List</h3>
                    <h4>Description</h4>
                </li>
                <li>
                    <h3>List</h3>
                    <h4>Description</h4>
                </li>
            </ul>
        </div>
    </section>
      </div>
  );
}

export default HomePage;