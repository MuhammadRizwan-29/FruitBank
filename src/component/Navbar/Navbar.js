import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./../../assets/Logo.jpg";
import  Dropdown  from "react-bootstrap/Dropdown";
function Navbar(){
    const [cartQty, setcartQty] = useState(0);
    return(
        <nav>
            <div className="headersection1">
                <img src={Logo} alt="website-logo-loading" className="logo" />
                <div className="searchBar">
                    <input type="text" placeholder="Search for products" className="searchInput" />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                <div className="iconsBox">
                    <div className="cartIcon">
                        <span className="cartQuaintity">{cartQty}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                    <div className="userIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="headersection2">
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic" >
                    Categories
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            Fruits
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Fresh Friuts
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <a>About us</a>
                <a>Contact us</a>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic" >
                    More
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            FAQ's
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Privacy & Policy
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Terms & Conditions
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
}
export default Navbar;