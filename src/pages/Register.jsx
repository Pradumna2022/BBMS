import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
     <section className="background-blood-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: '#fff' }}>
                            Donate Blood, <br />
                            <span style={{ color: '#ff4c4c' }}>Save Lives</span>
                        </h1>
                        <p className="mb-4 opacity-70" style={{ color: '#f8d7da' }}>
                            Your blood can give someone a second chance at life. Join our community of heroes
                            and help make a difference today.
                        </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <div className="card bg-dark bg-opacity-75">
                            <div className="card-body px-4 py-5 px-md-5">
                                <form>
                                    {/* First and Last Name */}
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label text-light" htmlFor="form3Example1">
                                                    First name
                                                </label>
                                                <input type="text" id="form3Example1" className="form-control text-light bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label text-light" htmlFor="form3Example2">
                                                    Last name
                                                </label>
                                                <input type="text" id="form3Example2" className="form-control text-light bg-transparent" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="form-outline mb-4">
                                        <label className="form-label text-light" htmlFor="form3Example3">
                                            Email address
                                        </label>
                                        <input type="email" id="form3Example3" className="form-control text-light bg-transparent" />
                                    </div>
                                     {/* Phone number */}
                                     <div className="form-outline mb-4">
                                        <label className="form-label text-light" htmlFor="form3Example3">
                                           Phone number
                                        </label>
                                        <input type="number" id="form3Example3" className="form-control text-light bg-transparent" />
                                    </div>

                                    {/* Password */}
                                    <div className="form-outline mb-4">
                                        <label className="form-label text-light" htmlFor="form3Example4">
                                            Password
                                        </label>
                                        <input type="password" id="form3Example4" className="form-control text-light bg-transparent" />
                                    </div>

                                    {/* Submit Button */}
                                    <div class="d-flex justify-content-center">
                                        <div>
                                            <button type="submit" className="btn btn-danger btn-block mb-4">Register</button>
                                        </div>
                                    </div>
                                    <div className='text-center' style={{ color: '#f8d7da' }}>
                                        <p>Have an account Then please<span><Link to='/login'  style={{ color: '#ff4c4c' }}> Login here</Link></span></p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Register