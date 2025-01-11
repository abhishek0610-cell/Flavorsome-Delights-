// import React from 'react'
// import '../App.css'

// const Home = () => {
//   return (
//     <div className="hero">
//     <div className="hero-tagline">
//       <h3>
//         "Unleash Your Inner Chef: Where Every Bite Tells a Delicious Story!"
//       </h3>
//     </div>
//     <div className="hero-intro">
//       Welcome to <span className="name">Flavorsome Delights</span>, the ultimate
//       destination for culinary inspiration and delightful recipes! Whether
//       you're a seasoned chef or a passionate home cook, our curated collection
//       of mouthwatering recipes is here to satisfy your taste buds and ignite
//       your culinary creativity. Explore a world of flavors, uncover secret
//       ingredients, and embark on a gastronomic adventure that will leave you
//       craving for more. Get ready to indulge in a feast for the senses and
//       elevate your cooking skills with our incredible recipe collection.
//     </div>
//     <div className="explore-btn">
//       <a href="#index"><button className="exp-btn" type="submit">Explore Now</button></a>
//     </div>
  
//   </div>
 


//   )
// }

// export default Home








import React from 'react'
import '../App.css'

const Home = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center px-4 md:px-8 text-center">
      <div className="hero-tagline max-w-4xl mx-auto mb-8">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
          "Unleash Your Inner Chef: Where Every Bite Tells a Delicious Story!"
        </h3>
      </div>
      
      <div className="hero-intro max-w-3xl mx-auto mb-12 text-lg text-gray-600 leading-relaxed">
        Welcome to <span className="name text-blue-600 font-semibold">Flavorsome Delights</span>, the ultimate
        destination for culinary inspiration and delightful recipes! Whether
        you're a seasoned chef or a passionate home cook, our curated collection
        of mouthwatering recipes is here to satisfy your taste buds and ignite
        your culinary creativity. Explore a world of flavors, uncover secret
        ingredients, and embark on a gastronomic adventure that will leave you
        craving for more. Get ready to indulge in a feast for the senses and
        elevate your cooking skills with our incredible recipe collection.
      </div>
      
      <div className="explore-btn">
        <a href="#index">
          <button 
            className="exp-btn bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            type="submit"
          >
            Explore Now
          </button>
        </a>
      </div>
    </div>
  )
}

export default Home