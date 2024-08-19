import React from 'react';
import './our-services.css';
const OurServices = () => {
    return (
        <div className='container' id = "services">

            <div className='heading' >
                <h2>Our Services</h2>
            </div>

            <div className='card-container'>


                <div className='Card'>

                    <img src="/images/1stpic.png" className='cards-image' />
                    <div className='card-content'>
                        <h3>Account Management: Simplify Your Financial Life</h3>
                        <p>Check real-time balances, review transaction history, and effortlessly handle multiple accounts—all in one place. Stay in control and make informed financial decisions with ease.
                        </p>
                    </div>


                </div>

                <div className='Card'>
                    <img src="/images/2nd pic.png" className='cards-image' />
                    <div className='card-content'>
                        <h3>Bill Payments: Effortless and Convenient</h3>
                        <p>
                            Pay your utility bills, credit card bills, and more directly from the app with just a few taps. Enjoy the convenience of scheduling one-time or recurring payments, and never worry about missing a due date again
                        </p>
                    </div>


                </div>


                <div className='Card'>
                    <img src="/images/3rd pic.png" className='cards-image' />
                    <div className='card-content'>
                        <h3>Build Savings: Achieve Your Financial Goals</h3>
                        <p>
                            Create personalized savings goals and track your progress in real-time while enjoying exclusive cashback offers and discounts on everyday purchases, helping you save more with every transaction.
                        </p>
                    </div>


                </div>



            </div>




        </div>


    );

};
export default OurServices;