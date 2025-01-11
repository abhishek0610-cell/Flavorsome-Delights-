import React from 'react'
import '../App.css'

const Home = () => {
  return (
    <div className="hero">
    <div className="hero-tagline">
      <h3>
        "Unleash Your Inner Chef: Where Every Bite Tells a Delicious Story!"
      </h3>
    </div>
    <div className="hero-intro">
      Welcome to <span className="name">Flavorsome Delights</span>, the ultimate
      destination for culinary inspiration and delightful recipes! Whether
      you're a seasoned chef or a passionate home cook, our curated collection
      of mouthwatering recipes is here to satisfy your taste buds and ignite
      your culinary creativity. Explore a world of flavors, uncover secret
      ingredients, and embark on a gastronomic adventure that will leave you
      craving for more. Get ready to indulge in a feast for the senses and
      elevate your cooking skills with our incredible recipe collection.
    </div>
    <div className="explore-btn">
      <a href="#index"><button className="exp-btn" type="submit">Explore Now</button></a>
    </div>
  
  </div>
 


  )
}

export default Home