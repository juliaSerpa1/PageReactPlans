import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import Signin from "../Sign/signin";
import Signup from "../Sign/signup";

const Header = () => {

    return (
        <>
        <header>
            <div className="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#">LOGO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-secondary" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQs</a>
                            </li>
                        </ul>
                        <div class="text-end">
                            <button type="button" class="btn btn-outline-info"  data-bs-toggle="modal" data-bs-target="#modalSignin">
                                <Signin/>
                                Sing In
                            </button>
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalSignup">
                                <Signup/>
                                Sing Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>

    )

};

export default Header;