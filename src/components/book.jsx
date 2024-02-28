import React from 'react'
import '/src/css/book.css'

function Book(props){
    return(
        <div className="book">
            <img src={props.url} alt={props.name} />
            <p>{props.name} <br /> <span> by {props.author}</span></p>
        </div>
    );
}

export default Book;