import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
// import heroimg from '../img/home-hero.png'
import Join from '../components/Join';


function Home() {
  return (
    <div>
      <div className='home'>
        <div className="main">
            <Nav/>
            <div className="hero">
              <div className="hero-left">
                <h1>Lorem ipsum dolor sit amet, consectetur.</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.dapibus ultricies neque sed rhoncus. Integer consequat aliquet aliquet. Quisque aliquam feugiat mauris, eu fringilla dolor eleifend id. Proin nibh dui, dictum nec enim eu, posuere dapibus nulla. Proin interdu
          viverra eu enim. Aenean fermentum egestas eros. Pellentesque non tellus nisi. Duis convallis ex id dui viverra molestie id at dolor. Nam et libero at </p>
              
              <button className='navbtn'>Get Started</button>
          </div>
            <div className="hero-right">
              </div>
            </div>
        </div>
          <Join/>
          <Footer/>
      </div>
    </div>
  )
}

export default Home;