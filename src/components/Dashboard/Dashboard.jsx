
import React from 'react';

import logoforbank from '../../assets/logoforbank2.png';
import './dashboard.css';



function Dashboard() {
    const handleSidebarToggle = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    };

    return (
        <div className='dashboardContainer'> 
            <div className="sidebar">
                <div className="top">
                    <div className="logo">
                        <img src={logoforbank} width="90px" height="40px" alt="NobleTrust Bank Logo" />
                    </div>
                    <i className="bx bx-menu" id="btn" onClick={handleSidebarToggle}></i>
                </div>
                <ul>
                    <li>
                        <a href="#">
                            <i className="bx bx-home"></i>
                            <span className="nav-item">Home</span>
                        </a>
                        <span className="tooltip">Home</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-credit-card"></i>
                            <span className="nav-item">Send</span>
                        </a>
                        <span className="tooltip">Send</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bx-history"></i>
                            <span className="nav-item">History</span>
                        </a>
                        <span className="tooltip">History</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bx-cog"></i>
                            <span className="nav-item">Settings</span>
                        </a>
                        <span className="tooltip">Settings</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bx-log-out"></i>
                            <span className="nav-item">Logout</span>
                        </a>
                        <span className="tooltip">Logout</span>
                    </li>
                </ul>
            </div>

            {/*main content*/}
            {/* <div className="main-content"> */}
                <div className="container5">
                    {/* <img src="/pictures/Group 239.png" width="90px" height="40px" alt="NobleTrust Bank Logo" /> */}
                    <div>
                        <a href="#"><i className="bx bx-notification"></i></a>
                        <span className="tooltip">Notification</span>
                    </div>
                </div>
            </div>

        // </div>

    );
}

function MainContent() {
    return (
        <div className="main-content">
            <div className="container">
                {/* <img src="/pictures/Group 239.png" width="90px" height="40px" alt="NobleTrust Bank Logo" /> */}
                <div>
                    <a href="#"><i className="bx bx-notification"></i></a>
                    <span className="tooltip">Notification</span>
                </div>
            </div>
        </div>
    );
}

function DashboardOne() {
    return (
        <div>
            <Dashboard />
            <MainContent />
        </div>
    );
}

export default DashboardOne;
