import React from "react";
import './header.css'
import './header.js'
import { NavLink } from "react-router-dom";


export default function Navbar()
{
    return(
        <>
            <div className="navbar-outer">
                <div className="navbar-inner">
                    <div className="navbar">
                        <div className="nav-left">
                            <img src="logo1@2x-free-img.png" alt="" />
                            <ul className="d-none d-lg-block">
                                <li><NavLink className={'nav-link d-inline '} to={'/'} style={({ isActive }) => ({
                                color: isActive ? "black" : "white",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>home</NavLink></li>
                                <li>
                                    <NavLink className={'nav-link d-inline'} to={'/everything'} style={({ isActive }) => ({
                                color: isActive ? "black" : "white",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>Everything</NavLink>
                                </li>
                                <li>
                                    <NavLink className={'nav-link d-inline'} to={'/women'} style={({ isActive }) => ({
                                color: isActive ? "black" : "white",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>Women</NavLink>
                                </li>
                                <li>
                                    <NavLink className={'nav-link d-inline'} to={'/men'} style={({ isActive }) => ({
                                color: isActive ? "black" : "white",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>Men</NavLink>
                                </li>
                                <li>
                                    <NavLink className={'nav-link d-inline'} to={'/accesories'} style={({ isActive }) => ({
                                color: isActive ? "black" : "white",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>accesories</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-right">
                            <ul className="d-none d-lg-block">
                                <li className="d-none">About</li>
                                <li className="d-none">Contact Us</li>
                                <li>
                                    <bdi>
                                        <span>$</span>0.00
                                    </bdi>
                                </li>
                                <li>
                                    <i className="ri-shopping-cart-line"></i>
                                </li>
                                <li><i className="ri-user-3-line"></i></li>
                            </ul>
                            <ul className="d-block d-lg-none">
                            <li>
                                    <bdi>
                                        <span>$</span>0.00
                                    </bdi>
                                </li>
                                <li>
                                    <i className="ri-shopping-cart-line"></i>
                                </li>
                                <li><i className="ri-user-3-line"></i></li>
                                <li><i className="ri-menu-line"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-text pl-3">
                        <h1 className="fw-bold text-light">Raining Offers For <br /> Hot Summer!</h1>
                        <h5>25% Off On All Products</h5>
                        <div className="d-flex gap-3">
                        <button className="text-uppercase btn1">shop now</button>
                        <button className="text-uppercase btn2">find more</button>
                        </div>
                    </div>
                </div>
                <div className="mob-nav d-lg-none"></div>
            </div>
            <div className="customize-box">
                <h5>Brandstore</h5><i className="ri-close-line close"></i>
            </div>
            <button className="change"><i className="ri-palette-fill"></i>customize</button>
        </>
    )
}