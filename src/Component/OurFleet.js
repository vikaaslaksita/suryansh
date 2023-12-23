import React from 'react';
import { Link } from 'react-router-dom';
import bike1 from './bike1.jpg';
import bike2 from './bike2.jpg';
import bike3 from './bike3.jpg';
import bike4 from './bike4.jpg';
import bike5 from './bike5.jpg';
import bike6 from './bike6.jpg';
// import image from './bgimagebike.jpd';
import './OurFleet.css';

const OurFleet = () => {
  return (
    <div>
        <div className="bg"></div>
        <div className='back-btn'>
    <button className='back--btn-fleet'><Link to={"/"}>Back</Link></button>
    </div>
      <div className="box1">
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
     <a href="/" target='_blank'><img src={bike1} className="card-img-top" alt="..."/></a>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">Starts @ 300/hr</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bike2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">Starts @ 400/hr</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bike3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">Starts @ 600/hr</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bike4} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">Starts @ 500/hr</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bike5} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">Starts @ 450/hr</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bike6} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">Starts @ 350/hr</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bike6} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">Starts @ 600/hr</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bike3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">Starts @ 550/hr</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bike1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">Starts @ 500/hr</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default OurFleet
