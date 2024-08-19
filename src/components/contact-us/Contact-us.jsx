// import React from 'react';
// import 'contact-us';
// const ContactUs = () => {
//     return (

// <div class="contact-us">
//         <div class="contactus-details">
//             <h2>CONTACT US</h2>
//             <span>Help Desk<br>
//                 <ul>
//                     <li>+234-987654321</li>
//                     <li><a href="mailto:info@nobletrustbank.com">INFO@NOBLETRUSTBANK.COM</a></li>
//                     <li>CHAT WITH US ON WHATSAPP - 0123456789</li>
//                 </ul>
//             </span>
//         </div>
//         <div className="contactus-img">
//             <img src="image/contactusimg.png" alt="error">
//         </div>
//     </div>


//     );
//     export default ContactUs;









// };
import React from 'react';
import './contact-us.css'; // Assuming the CSS file is named contact-us.css

const ContactUs = () => {
    return (
        <div className="contact-us" id="contact us">
            <div className="contactus-details">
                <h2>CONTACT US</h2>
                <div>
                    <p>Help Desk</p>
                    <ul>
                        <li>+234-987654321</li>
                        <li><a href="mailto:info@nobletrustbank.com">INFO@NOBLETRUSTBANK.COM</a></li>
                        <li>CHAT WITH US ON WHATSAPP - 0123456789</li>
                    </ul>
                </div>
            </div>
            <div className="contactus-img">
                <img src ="/images/ContactusPic.png" alt="Contact Us" />
            </div>
        </div>
    );
};

export default ContactUs;
