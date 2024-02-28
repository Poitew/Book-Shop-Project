import React from "react";
import Book from './book.jsx'
import '/src/css/library.css'

function Library(){
    return(
        <div className="library">
            <Book url="src/assets/images/dagon.jpg" name="Dagon" author="H.P. Lovecraft"></Book>
            <Book url="src/assets/images/flesh-and-fire.jpg" name="A light in the flame" author=" Jennifer L. Armentrout"></Book>
            <Book url="src/assets/images/beast.jpg" name="In the beginning was the beast" author="Omar Di Monopoli "></Book>
            <Book url="src/assets/images/misery.jpg" name="misery" author="Stephen King"></Book>
            <Book url="src/assets/images/cloisters.jpg" name="The Cloisters" author="Katy Hays"></Book>
            <Book url="src/assets/images/1984.jpg" name="1984" author="George Orwell"></Book>
            <Book url="src/assets/images/house-of-voices.jpg" name="The house of voices" author="Donato Carrisi"></Book>
            <Book url="src/assets/images/no-longer-human.jpg" name="No Longer Human" author="Osamu Dazai"></Book>
            <Book url="src/assets/images/babel.jpg" name="babel" author="R. F. Kuang"></Book>
            <Book url="src/assets/images/the-last-legion.jpg" name="The Last Legion" author="Valerio Massimo Manfredi"></Book>
            <Book url="src/assets/images/animal-farm.jpg" name="Animal farm" author="George Orwell"></Book>
            <Book url="src/assets/images/cthulhu.jpg" name="Cthulhu" author="H. P. Lovecraft"></Book>

        </div>
    );
}

export default Library;