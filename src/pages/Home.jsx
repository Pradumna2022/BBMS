import React from 'react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="bg-danger text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Save Lives with Every Drop</h1>
                    <p className="lead">Join us in making a difference by donating blood and helping those in need.</p>
                    <a href="#services" className="btn btn-danger btn-lg mt-3">Get Started</a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-4">About Us</h2>
                    <p className="text-muted">
                        We are dedicated to providing a reliable and efficient blood bank management system to connect donors with recipients in need. Our platform ensures a seamless process for blood donation and blood requests.
                    </p>
                    <div className="row mt-5">
                        <div className="col-md-4">
                        <svg  className="rounded-circle mb-3" width="150px" height="150px" viewBox="-1.28 -1.28 18.56 18.56" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#740202" stroke-width="0.16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="#b60707"></path> </g></svg>
                            <h5>Safe Donations</h5>
                            <p>We ensure that all donations are handled securely and safely.</p>
                        </div>
                        <div className="col-md-4">
                            <svg className="rounded-circle mb-3" width="150px" height="150px" viewBox="-0.96 -0.96 17.92 17.92" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5c0000" stroke-width="0.128"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.7071 5.70711L11.2929 4.29289L6.5 9.08579L4.70711 7.29289L3.29289 8.70711L6.5 11.9142L12.7071 5.70711Z" fill="#b00707"></path> </g></svg>
                            <h5>Quick Responses</h5>
                            <p>Our system matches requests with donors promptly.</p>
                        </div>
                        <div className="col-md-4">
                            <svg className="rounded-circle mb-3" width="150px" height="150px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#6b0000" stroke="#6b0000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#b60707"></path> </g> </g></svg>
                            <h5>Expert Team</h5>
                            <p>Our dedicated team is always ready to assist you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Our Services</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Donor Management" />
                                <div className="card-body">
                                    <h5 className="card-title">Donor Management</h5>
                                    <p className="card-text">Track and manage registered donors efficiently.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Blood Requests" />
                                <div className="card-body">
                                    <h5 className="card-title">Blood Requests</h5>
                                    <p className="card-text">Handle blood requests seamlessly and quickly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Real-Time Tracking" />
                                <div className="card-body">
                                    <h5 className="card-title">Real-Time Tracking</h5>
                                    <p className="card-text">Monitor donations and requests in real time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Contact Us</h2>
                    <p className="text-muted mb-5">Have questions or need assistance? Get in touch with us.</p>
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-danger">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Home;
