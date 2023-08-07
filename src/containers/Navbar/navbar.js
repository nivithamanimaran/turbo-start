import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../../assests/logo.svg'

function Navbar(props) {
    const navigation = useNavigate();
    const [line, setline] = useState();
    console.log(line);
    useEffect(() => {

        setline(props.page)
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark py-0  ">
                <div className="container px-4 px-md-4 px-lg-5">
                    <a className="navbar-brand pull-right " href="/">
                        <img src={Logo} className='img-fluid col-6 col-md-10 col-lg-12' alt='logo' />
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon border-0"></span>
                    </button>
                    <div className="collapse navbar-collapse py-4" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto gap-5">
                            <li className="nav-item">
                                <a className="nav-link text-light " href="">COEs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light " href="">Company</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light " href="">Network</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light " href="">Insights</a>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-light text-dark rounded-5 px-4'>Contact Us</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar