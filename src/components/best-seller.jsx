import React from 'react'
import '/src/css/best-seller.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function Best_book_section(){
    return(
        <div className="best-section">
            <h3>Current Best Seller:</h3>
            <img src="/src/assets/images/best-seller.jpg" alt="Best seller" />
            <div className="b-s-description">
                <h4>Iron Flame</h4>
                <p>
                    Everyone expected violet Sorrengail to die during her first year at Basgiath Military Academy,
                    including herself.
                    But the Threshing was only the first,
                    very difficult test to eliminate the most insecure,
                    unworthy and unfortunate candidates. ... <br/> <br/> <span>-Rebecca Yarros</span>
                </p>
            </div>
            <div className="price">
                <p className='price-p' >€30</p><p className='wishlist' > <FontAwesomeIcon icon={faHeart} className='heart' />Add to Wishlist</p>
                <button className='buyButton button-template' ><FontAwesomeIcon icon={faCartPlus} className='cart' />Add to Cart</button>
                <button className='preorderButton button-template' ><FontAwesomeIcon icon={faShop} className='shop' />Book and collect</button>
            </div>
        </div>
    );
}

export default Best_book_section;