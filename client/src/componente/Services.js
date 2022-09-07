import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from '../images/carpanter2.jpg';
import img3 from '../images/garden.jpg';
import img4 from '../images/painting1.jpg';
import img2 from '../images/plumber1.jpg';
function Services() {
  return (
    <div class="service py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10 col-11 mx-auto">
          <div class="mt-0 mb-5 text-center">
            <h1 class="service_heading">OUR SERVICES</h1>
          </div>
          <div class="row ">
            <div class="col-md-6 mt-md-2 m-0">
              <span class="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                Provide best services at your home
              </span>
              <h4></h4>
              <h6 class="font-weight-light subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
              <div class="row mt-md-5">
                <div class="col-md-6 mt-3">
                  <h6 class="font-weight-medium">Electrician</h6>
                  <p>Need electrician, just contact </p>
                </div>
                <div class="col-md-6 mt-3">
                  <h6 class="font-weight-medium">Plumber</h6>
                  <p>provide best plumber to your doorstrop</p>
                </div>
                <div class="col-md-6 mt-3">
                  <h6 class="font-weight-medium">Carpenter</h6>
                  <p>furniture making upholstery & polish</p>
                </div>
                <div class="col-md-6 mt-3">
                  <h6 class="font-weight-medium">Gardener</h6>
                  <p>To provide gardeners who maintain the gardens design</p>
                </div>
                <div class="col-lg-12 my-4 ">
                  <a class="btn btn-sm btn-info "><NavLink to='/jobseekersList' className='checkbox'  >Check More</NavLink> </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-md-5 m-0">
              <div class="row wrap-service">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-12 img-hover mb-4">
                      <img alt="ux" class="rounded img-shadow img-fluid" src={img4} />
                    </div>
                    <div class="col-md-12 img-hover mb-4">
                      <img alt="ux" class="rounded img-shadow img-fluid" src={img3} />
                    </div>
                  </div>
                </div>
                <div class="col-md-6 uneven-box">
                    <div class="row">
                    <div class="col-md-12 img-hover mb-4">
                      <img alt="ux" class="rounded img-shadow img-fluid" src={img2} />
                    </div>
                    <div class="col-md-12 img-hover mb-4">
                      <img alt="ux" class="rounded img-shadow img-fluid" src={img1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services