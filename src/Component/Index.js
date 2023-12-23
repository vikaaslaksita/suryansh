import React from 'react';
import { Link } from'react-router-dom';
import './Index.css';

const Index = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SnapBikes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ContactUs</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/OurFleet"}>Our Fleet</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/Login"}>Login</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Blog
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Tariff</a></li>
            <li><a className="dropdown-item" href="#">Discount</a></li>
            <li>< hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Write for us </a></li>
          </ul>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
      </nav>
     <div className='main-container'>
        <h1>SnapBike</h1>
        <span>Vintage Vibes</span> <br />
        <div className="bike-search">
          <input type="date" title='Start Date and Time' /> &nbsp; &nbsp;
          <input type="date" title='End Date and Time' /> <br />
         <button className='btn'>Search</button>
        </div>
     </div>
     <div>
      <footer>
        <div className="footer-container">   
        <div className='footer-contact'>
            <p>Contact Us</p>
            <p><a href="https://api.whatsapp.com/send?phone=919131934880 & text= Hello Suryansh" target='_blank'><i className="fab fa-whatsapp"></i></a>Phone:<a href="tel:+919131934880">+919131934880</a></p>
            <p>Email:<a href="mailto:<suryanshsaxena808@gmail.com>">suryanshsaxena808@gmail.com</a></p>   
        </div> 
        <div className='footer-icons'>
        <p>Follow Us</p> 
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>        
      </footer>
     </div>
    </div>
  );
}
export default Index;
