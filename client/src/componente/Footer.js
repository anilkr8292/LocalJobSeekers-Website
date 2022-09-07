import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='col-6 col-lg-3'>
                            <h2>Pages</h2>
                            <u1>
                                <li>
                                <a href='#'>  Home </a>
                                </li>
                                <li>
                                <a> <NavLink to='Login'> Login </NavLink> </a>
                                </li>
                                <li>
                                <a> <NavLink to='JobSeekersList'> JobSeekersList </NavLink> </a>
                                </li>
                                <li>
                                <a> <NavLink to='Contact'>Contactus </NavLink></a>
                                </li>
                                
                            </u1>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Services</h2>
                            <u1>
                                <li>
                                <a> <NavLink to='JobSeekersList'>Painting </NavLink></a>
                                </li>
                                <li>
                                <a> <NavLink to='JobSeekersList'>Plumbering </NavLink></a>
                                </li>
                                <li>
                                <a> <NavLink to='JobSeekersList'>Carpenter </NavLink></a>
                                </li>
                                <li>
                                <a> <NavLink to='JobSeekersList'>Gardener </NavLink></a>
                                </li>
                                
                            </u1>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Contact</h2>
                            <u1>
                                <li>
                                <a> <NavLink to='Contact'> Kanhai </NavLink></a>
                                </li>
                                <li>
                                <a><NavLink to='Contact'> Raushan </NavLink></a>
                                </li>
                                <li>
                                <a> <NavLink to='Contact'>Deepak </NavLink> </a>
                                </li>
                                <li>
                                <a> <NavLink to ='Contact'> Anil </NavLink></a>
                                </li>
                                
                            </u1>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Follow Us </h2>
                            <div className='row'>
                                <div className='col-3 mx-auto'>
                                    <a href='#'>
                                        <i className='fab fa-instagram fontawesome-style'></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href='#'>
                                        <i className='fab fa-facebook fontawesome-style'></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href='#'>
                                        <i className='fab fa-linkedin fontawesome-style'></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href='#'>
                                        <i className='fab fa-twitter fontawesome-style'></i>
                                    </a>
                                </div>
                          </div>
                            
                        </div>
                    </div>
                    <hr />
                    <div className='mt-5'>
                        <p className='main-hero-para text-center w-100'>
                            Copyright @ 2022 LocalJobseekers. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer;