import React, { useState } from 'react'
import categories from './Categories2'
import {Dropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const Category2 = () => {
  const[data,setData]=useState(categories);
 
  // filter for category
  const filterResult = (catItem) => {
    const result = categories.filter((curDate) =>{
      return curDate.category === catItem;
    });
  setData(result);
} 
  return (
    <>
      <div className="container">
        <div className="rows">
            <div className="cols">
                <h1 className='titles'>Filter by Category</h1>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose Location
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item><NavLink to='/Category'>Muzaffarpur</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink to='/Category2'>Darbhanga</NavLink></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className="rows">
            <div className="cols">
                <button className='btn' onClick={() => setData(categories)}>All</button>
                <button className='btn' onClick={() => filterResult('Plumber')}>Plumber</button>
                <button className='btn' onClick={() => filterResult('Carpenter')}>Carpenter</button>
                <button className='btn' onClick={() => filterResult('Gardener')}>Gardener</button>
                <button className='btn' onClick={() => filterResult('Electrician')}>Electrician</button>
                <button className='btn' onClick={() => filterResult('Painter')}>Painter</button>
            </div>
                <div className="cardsimg">
                  {data.map((values) => {
                    const{id,title,price,img} = values;
                    return(
                      <>
                      <div className="cardimg" key={id}>
                        <div className="card-header-page">
                            <img src={img} alt="title" />
                        </div>
                        <div className="card-body-page">
                          <h2 className='title '>{title}</h2>
                          <span className="price">₹{price}</span>
                        </div>
                        <div className="card-footer-page">
                          <button className='booking'> <NavLink to='/Bookingpage'>book</NavLink> </button>
                        </div>
                     </div>
                      </>
                    )
                  })}
                </div>
            </div>
        </div>
    </>
  )
}
export default Category2;
