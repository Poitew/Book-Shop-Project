import React, { useState, useEffect } from 'react'
import '/src/css/best-seller.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Best_book_section(props){

    const [count, setCount] = useState(0)

    let rand;
    useEffect(
        () => {
            rand = Math.floor(Math.random() * 5) + 1;
        }
    );

    function handleWishlist(){
        alert("Item added to the wishlist")
    }

    function handleBuy(){
        alert("Item added to cart");
        setCount(prevCount => prevCount + 1);
    }

    function handlebook(){
        alert(`Item booked, it'll be ready in ${rand} day/s to the nearest store`);
    }

    return(
        <div className="best-section">
            <div className="fixed-cart">
                <FontAwesomeIcon icon={faCartShopping} className='shop-cart' />
                <p>{count}</p>
            </div>
            <h3>Current Best Seller:</h3>
            <p className='first-place' >1°</p>
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
                <p className='price-p' >€30</p>
                <p className='wishlist' >
                    <button onClick={handleWishlist}> 
                        <FontAwesomeIcon icon={faHeart} className='heart' />
                    </button>
                    Add to Wishlist
                </p>
                <button onClick={handleBuy} className='buyButton button-template' ><FontAwesomeIcon icon={faCartPlus} className='cart' />Add to Cart</button>
                <button onClick={handlebook} className='preorderButton button-template' ><FontAwesomeIcon icon={faShop} className='shop' />Book and collect</button>
            </div>
        </div>
    );
}

export default Best_book_section;