import React from 'react';
import './Footer.css';
function Footer(){
   return(
   <div className="footer">
       <div className="footer-top">
           <p>Whats Growing On.....</p>
       </div>
       <div className="footer-links">
            <div className="footer-link-area">
                <p>"For many years he maintained his <br/>
                status as the most popular flower in the world.<br/> 
                His fame was further glorified in ancient Greece,<br/> 
                and ancient China."</p>
            </div>
            <div className="footer-link-area">
                <p>"From the beautiful bellflower,<br/> 
                    produced a strong glue in ancient times.<br/> 
                    Amazing how wonderful things can be <br/> 
                    done with the help of nature around us."</p>
            </div>
            <div className="footer-link-area">
                <p>"The dictmanus flower produces natural <br/> 
                     gas on hot nights, which if you light a<br/> 
                    match next to it, will most likely burn."</p>
            </div>
       </div>
   </div>
   )
}
export default Footer;