import React from "react";
import Signin from "../Sign";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import Signin from "../Sign";

const Header = () => {

    // const { signup, signin} = this.state;

    // constructor = (props) => {
    //     super(props)

    //     this.state = {
    //         signin: false,
    //         signup: false,

    //     }
    // }

    // onOpenModal = () =>{
    //     this.setState({ signin:true });
    // };

    // onOpenModalSignup = () =>{
    //     this.setState({ signup:true });
    // };

    // onCloseModal = () =>{
    //     this.setState({ signin: false });
    // };

    // onCloseModalclose = () =>{
    //     this.setState({ signup:false });
    // };

    return (
        <>
        <header>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LOGO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input class="form-control form-control-dark" type="search" placeholder="Search..." aria-label="Search" />
                        </form>
                        <div class="text-end">
                            <button type="button" class="btn btn-outline-dark" data-bs-target="exampleModal">
                                <Signin/>
                                Sing In
                            </button>
                            <button type="button" class="btn btn-warning">Sing Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>

    )

};

export default Header;