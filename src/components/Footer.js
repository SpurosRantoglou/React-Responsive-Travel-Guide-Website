import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Μείνε ενημερωμένος για κάθε νέο προορισμό που έρχεται
                </p>
                <p className='footer-subscription-text'>
                    Ακύρωσε την εγγραφή σου όποια στιγμή θέλεις
                </p>

                <div>

                    <form className='input-areas'>
                        <input type="email" name="email" className="footer-input" placeholder="example@email.com"/>  

                        <Button buttonStyle='btn--outline'>Εγγραφή</Button>
                        
                    </form>
                </div>
            </section>

            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Σχετικά με εμάς</h2>
                        <Link to="/"><p>Ποιοι είμαστε;</p></Link>
                        <Link to="/"><p>Τι στοχεύουμε;</p></Link>
                        <Link to="/"><p>Που βρισκόμαστε;</p></Link>
                        <Link to="/"><p>Πως ξεκίνησε η ιδέα;</p></Link>
                
                    </div>
                    <div className='footer-link-items'>
                        <h2>Επικοινωνία</h2>
                        <Link to="/">Τηλέφωνο</Link>
                        <Link to="/">Email</Link>
                        <Link to="/">App Store</Link>
                        <Link to="/">Google Play</Link>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Πολιτική Απορρήτου</h2>
                        <Link to="/">Όροι χρήσεις</Link>
                        <Link to="/">Προσωπικά Δεδομένα</Link>
                        <Link to="/">Στοιχεία εγγραφής</Link>
                        <Link to="/">Διαγραφή λογαριασμού</Link>                    
                    </div>
                    <div className='footer-link-items'>
                        <h2>Οδηγός βοήθειας</h2>
                        <Link to="/">Τι θα χρειαστείς στα ταξίδια σου;</Link>
                        <Link to="/">Πώς θα βρεις επιβάτες;</Link>
                        <Link to="/">Ποιοι είναι οι διαθέσιμοι προορισμοί;</Link>
                        <Link to="/">Ποιος είναι ο κατάλληλος προορισμός για σένα;</Link>                    
                    </div>
                </div>
            </div>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>Explorer © 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'/>
                        </Link>

                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'/>
                        </Link>

                        <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                            <i className='fab fa-twitter'/>
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Footer
