// import React from 'react'
// import Logo from '../Assests/logo-removebg-preview.png'
// import { NavLink } from 'react-router-dom'


// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="nav-img">
//         <img src={Logo} alt="Logo" className="logo" />
//       </div>
//       <div className="nav-list">
//         <ul className="list-items">
//           <NavLink to='/' className="list-link">Home</NavLink>
//           <NavLink to='/recipe' className="list-link">Recipe</NavLink>
//           <NavLink to='/contact' className="list-link">Contact</NavLink>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar







import React from 'react'
import Logo from '../Assests/logo-removebg-preview.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-sm bg-white/90 shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="nav-img">
            <img 
              src={Logo} 
              alt="Logo" 
              className="h-12 w-auto transition-all duration-300 hover:scale-110 hover:rotate-2" 
            />
          </div>
          <div className="nav-list">
            <ul className="flex space-x-12 items-center">
              <NavLink 
                to='/' 
                className={({ isActive }) => 
                  `px-4 py-2 text-gray-700 font-medium text-base relative transition-all duration-300
                   before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full 
                   before:h-0.5 before:bg-blue-600 before:scale-x-0 before:origin-right 
                   before:transition-transform before:duration-300 hover:before:scale-x-100 
                   hover:before:origin-left ${
                    isActive 
                      ? 'text-blue-600 before:scale-x-100' 
                      : 'hover:text-blue-600'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to='/recipe' 
                className={({ isActive }) => 
                  `px-4 py-2 text-gray-700 font-medium text-base relative transition-all duration-300
                   before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full 
                   before:h-0.5 before:bg-blue-600 before:scale-x-0 before:origin-right 
                   before:transition-transform before:duration-300 hover:before:scale-x-100 
                   hover:before:origin-left ${
                    isActive 
                      ? 'text-blue-600 before:scale-x-100' 
                      : 'hover:text-blue-600'
                  }`
                }
              >
                Recipe
              </NavLink>
              <NavLink 
                to='/contact' 
                className={({ isActive }) => 
                  `px-4 py-2 text-gray-700 font-medium text-base relative transition-all duration-300
                   before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full 
                   before:h-0.5 before:bg-blue-600 before:scale-x-0 before:origin-right 
                   before:transition-transform before:duration-300 hover:before:scale-x-100 
                   hover:before:origin-left ${
                    isActive 
                      ? 'text-blue-600 before:scale-x-100' 
                      : 'hover:text-blue-600'
                  }`
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar