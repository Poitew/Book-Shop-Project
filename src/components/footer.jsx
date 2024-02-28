import React from 'react'
import '/src/css/footer.css'

function FooterComp(){
    return(
        <footer>
            <div className="book-footer">
                <p>Books</p>
                <ul>
                    <li>Thrillers</li>
                    <li>Technology</li>
                    <li>Romance</li>
                    <li>Biography</li>
                    <li>AutoBiography</li>
                </ul>
            </div>
            <div className="contact-footer">
                <p>Contact Us</p>
                <ul>
                    <li>Albuquerque, New Mexico</li>
                    <li>555 - 89215</li>
                    <li>555 - 67542</li>
                    <li>book&co@books.com</li>
                    <li>www.book&co.com</li>
                </ul>
            </div>
            <div className="contact-form">
                <p>Contact Form:</p>
                <form>
                    <label htmlFor="Name" >Name</label><br />
                    <input type="text" className='input-one' /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="text" className='input-one' /><br />
                    <label htmlFor="feedback">Feedback</label><br />
                    <input type="text" className='input-two' />
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="separator">
                <hr />
                <p>Made with React and love by sickpoitew</p>
            </div>
            
        </footer>
    );
}

export default FooterComp;