import React from 'react';

const Features = () => {
    return (
        <div className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="text-danger mb-4">Our Features</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Donor Management</h5>
                                <p className="card-text">Keep track of all registered donors and their blood types.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Request Handling</h5>
                                <p className="card-text">Manage blood requests and ensure timely responses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Secure Transactions</h5>
                                <p className="card-text">Ensure the safety and security of all records.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
