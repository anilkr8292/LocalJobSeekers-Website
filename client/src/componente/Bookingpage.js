import React from 'react'
import bookingimg from '../images/bookingimg.jpg'

function Bookingpage() {
  return (
    <>
    <div className='bookmain'>
        <h2>JobSeeker Booking form</h2>
        <hr></hr>
        <div className='cont'>
        <div className='row'>
            <div className='col-sm'>
        <div className='bookimg'>
            <img src={bookingimg}></img>
        </div>
        </div>
        

        
        
        <div className='col-sm'>
        <div className='div'>
     
        <form className='formcontent'>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                    </div>
                    <input name="" class="form-control" placeholder="Full name" type="text" />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                    </div>
                    <input name="" class="form-control" placeholder="Email address" type="email" />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-map-marker"></i> </span>
                    </div>
                    <input name="" class="form-control" placeholder="Full Address where work is done" type="text" />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                    </div>
                    <select class="custom-select" style={{maxWidth: "120px"}}>
                        <option selected="">+91</option>
                    </select>
                    <input name="" class="form-control" placeholder="Phone number" type="text" />
                </div>
                {/* <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                    </div>
                    <input class="form-control" placeholder="Create password" type="password" />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                    </div>
                    <input class="form-control" placeholder="Repeat password" type="password" />
                </div>                                       */}
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-calendar-o"></i> </span>
                    </div>
                    <input name="" class="form-control" placeholder="date of work" type="date" />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-clock-o"></i> </span>
                    </div>
                    <input name="" class="form-control" placeholder="time of work" type="time" />
                </div>
                <div class="form-group text-center mt-3">
                    <button type="button" class="btn btn-primary btn-block">Book NOW</button>
                </div>
                       
            </form>
        
        </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Bookingpage;