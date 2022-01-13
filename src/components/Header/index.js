import React from "react";
import './style.css'

const Header = () => {
    return (
        <header>
            <div class="p-3 bg-light text-black">
                <div class="container-fluid">
                    <div class="nav justify-content-lg-start">
                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
                            <li>
                                <a class="nav-link px-2 text-secondary" href="#">Home</a>
                            </li>
                            <li>
                                <a class="nav-link px-2 text-black" href="#">Features</a>
                            </li>
                            <li>
                                <a class="nav-link px-2 text-black" href="#">Pricing</a>
                            </li>
                            <li>
                                <a class="nav-link px-2 text-black" href="#">FAQs</a>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" margin="5px" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </li>
                        </ul>
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input class="form-control form-control-dark" type="search" placeholder="Search..." aria-label="Search" />
                        </form>
                        <div class="text-end">
                            <button type="button" class="btn btn-outline-dark me-2">Sing In</button>
                            <button type="button" class="btn btn-warning">Sing Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 bg-image">

            </div>
        </header>
    )
};

export default Header;