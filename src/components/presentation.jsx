import React from 'react'
import '/src/css/presentation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Presentation(){
    return(
        <div className='presentation'>
            <div className='title-presentation'>
                <img src="src/assets/images/background-book.svg" alt="Book background" />
                <h1>Book&co: <br/> <span className='left-span'>Books for <span className='orange-span' >everyone</span></span></h1>
            </div>
            <div className="about">
                <h2>Who are we?</h2>
                <p>
                    Book&co is a company that deals with the sale of books and comics of any genre on a global level,
                    here at Book&co the main thing that distinguishes us is the care of customer satisfaction
                </p>
                <div className="buy">
                    <a href='' ><p>Buy Some Books!</p><FontAwesomeIcon icon={faChevronDown} className='arrow-down' /></a>
                </div>
            </div>
        </div>
    );
}

export default Presentation