import React from 'react';
import { NavLink } from "react-router-dom";

// import SearchRecipe from './SearchRecipe';



function Navbar() {
    return (
        <div className='Navbar'>
            <h1>Recipe Organizer</h1>
            <NavLink className='navlink' to='/'>home</NavLink>

            <NavLink className='navlink' to='/smurfs'>smurf backend</NavLink>

            
        </div>

        )
    }
export default Navbar;