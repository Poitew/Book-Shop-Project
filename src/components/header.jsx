import React from 'react'
import '/src/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function HeaderComp(){
    return(
        <header>

            <div className="nav-bar">
                <div className="logo">
                  <img src="src/assets/images/book&co.svg" alt="" />
                </div>
                <div className="search-background">
                    <input type="text" placeholder='Cerca un libro..' />
                    <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                </div>
                <div className="user-icon">
                    <FontAwesomeIcon icon={faUser}  className='icons-header' />
                    <FontAwesomeIcon icon={faHeart} className='icons-header' />
                    <FontAwesomeIcon icon={faCartShopping} className='icons-header' />
                </div>
            </div>

            <nav>
                <div className="Home-header">
                       <a href='' ><p>Home&About</p></a>
                </div>

                <div className="Best-header">
                    <a href='' ><p>Best-Sellers</p></a>
                </div>

                <div className="Books-header">
                       <a href='' ><p>Books</p></a>
                </div>

                <div className="Contact-header">
                       <a href=''><p>Contact</p></a>
                </div>
            </nav>

        </header>
    );
}

export default HeaderComp;