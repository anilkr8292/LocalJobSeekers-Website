import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../../images/painting1.jpg'

const Profilepage = () => {
  return (
    <>
   
        <div className='container emp-profile'>
            <form method=''>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='profile-img'>
                        <img src={img1} alt='kk' />

                        </div>
                        
                    </div>

                    <div className='col-md-6'>
                        <div className='profile-head'>
                            <h5>Kanhai Gupta</h5>
                            <h6>Frontend Developer</h6>
                            <p className='profile-rating mt-3 mb-5'>Rankings <span>8/10</span></p>

                            <ul className='nav nav-tabs' role='tablist'>
                                <li className='nav-item'>
                                    {/* <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab'>About</a>  */}
                                    <a id='home-tab'><NavLink to='home'>Home</NavLink></a>
                                    

                                </li>

                                <li className='nav-item'>
                                    {/* <a className='nav-link active' id='profile-tab' data-toggle='tab' href='#profile' role='tab'>Timeline</a> */}
                                    <a id='profile-tab'><NavLink to='profile' className='p-3'>Timeline</NavLink></a>
                                    
                                </li>

                            </ul>
                      </div>
                    </div>
                    
                    <div className='col-md-2'>
                     <input type='submit' className='profile-edit-btn' name='btnAddMore' value='Edit Profile'></input>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4'>
                        <div className='profile-work'>
                            <br></br>
                            <p>SOCIAL MEDIA LINK</p>
                            <a href='https://95.216.12.176/watch?v=kHEhhV3EyPU&__cpo=aHR0cHM6Ly93d3cueW91dHViZS5jb20' target='_kanhai'>Youtube</a><br/>
                            <a href='https://www.facebook.com/' target='_kanhai'>facebook</a><br/>
                            <a href='https://www.instagram.com/accounts/login/' target='_kanhai'>instagram</a><br/>
                            {/* <a href='https://95.216.12.176/watch?v=kHEhhV3EyPU&__cpo=aHR0cHM6Ly93d3cueW91dHViZS5jb20' target='_kanhai'>Youtube</a><br/>
                            <a href='https://95.216.12.176/watch?v=kHEhhV3EyPU&__cpo=aHR0cHM6Ly93d3cueW91dHViZS5jb20' target='_kanhai'>Youtube</a><br/>
                            <a href='https://95.216.12.176/watch?v=kHEhhV3EyPU&__cpo=aHR0cHM6Ly93d3cueW91dHViZS5jb20' target='_kanhai'>Youtube</a><br/>
                            <a href='https://95.216.12.176/watch?v=kHEhhV3EyPU&__cpo=aHR0cHM6Ly93d3cueW91dHViZS5jb20' target='_kanhai'>Youtube</a><br/> */}
                        </div>

                    </div>

                    <div className='col-md-8 pl-5 about-info'>
                        <div className='tab-content p[rofile-tab' id='myTabcontent'>
                            <div className=' tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>USER ID</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>95869587465</p>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>NAME</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>Kanhai kumar gupta</p>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>Email id</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>k2gupta@gmail.com</p>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>Phone no</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>9122565469</p>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>profession</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>Student</p>
                                    </div>
                                </div>

                            </div>

                            <div className=' tab-pane fade ' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>USER ID</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>95869587465</p>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>Name</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>raushan </p>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>Email id</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>k2gupta@gmail.com</p>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>Phone no</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>9122565469</p>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-6'>
                                        <label>profession</label>

                                    </div>
                                    <div className='col-md-6'>
                                        <p>Student</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </form>

        </div>
       
    </>
  )
}

export default Profilepage