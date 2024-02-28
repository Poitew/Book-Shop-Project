import React from 'react'
import HeaderComp from './header'
import Presentation from './presentation'
import Best_book_section from './best-seller'
import Library from './library'
import FooterComp from './footer'

function App() {
    return(
        <>
            <HeaderComp></HeaderComp>
            <Presentation></Presentation>
            <Best_book_section></Best_book_section>
            <Library></Library>
            <FooterComp></FooterComp>
        </>
    );
}

export default App;