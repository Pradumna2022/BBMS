import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4"
        //  style={{ position: "absolute", width: '100%', bottom: 0 }}
        >
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Blood Bank Management System. All Rights Reserved.</p>
                <p>Follow us on
                    <a href="#" className="text-white mx-2"> Facebook</a> |
                    <a href="#" className="text-white mx-2"> Twitter</a> |
                    <a href="#" className="text-white mx-2"> Instagram</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
