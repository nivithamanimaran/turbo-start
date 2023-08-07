import React from 'react';
import logo from '../../assests/logo.svg'
import facebook from '../../assests/Facebook.svg'
import twitter from '../../assests/Twitter.svg'
import insta from '../../assests/Instagram.svg'

function Footer() {
    return (
        <>
            <div className='footbgcolor py-5 m-0'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-4'>
                            <img src={logo} alt='logo' className='img-fluid' />
                            <p className='text-light my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing aebit elit.</p>
                            <div className='row'>
                                <div className='col-12'>
                                    <form>
                                        <label for="exampleFormControlInput1" class="h3 form-label text-light">Subscribe</label>
                                        <div className="input-group mb-3">
                                            <input type="text " className="form-control rounded-0 inputcolor text-light" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" id='exampleFormControlInput1' />
                                            <span className="input-group-text rounded-0" id="basic-addon2"><button className='btn'>Subscribe</button></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-8 col-md-8 p-3 p-lg-0'>
                            <div className='row justify-content-center'>
                                <div className='col-12 col-lg-3 col-md-3'>
                                    <p className='h4 text-light mb-lg-5'>About</p>
                                    <p className='text-light mt-3 mt-lg-0'>How it works</p>
                                    <p className='text-light'>Featured </p>
                                    <p className='text-light'>Partnership </p>
                                    <p className='text-light'>Bussiness Relation</p>
                                </div>
                                <div className='col-12 col-lg-3 col-md-3'>
                                    <p className='h4 text-light mb-lg-5'>Community</p>
                                    <p className='text-light mt-lg-0 mt-3'>Events </p>
                                    <p className='text-light'>Blog </p>
                                    <p className='text-light'>Podcast  </p>
                                    <p className='text-light'>Invite a friend</p>
                                </div>
                                <div className='col-12 col-lg-3 col-md-3 mt-3 mt-lg-0 '>
                                    <p className='h4 text-light mb-lg-5'>Socials</p>
                                    <div className='row mt-lg-0 mt-3'>
                                        <div className='col-2 col-lg-3 col-md-3 m-0 p-0'>
                                            <img src={facebook} className='img-fluid col-12' alt='facebook' />
                                        </div>
                                        <div className='col-9 col-lg-9 col-md-9'>
                                            <p className='text-light'>Facebook</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-2 col-lg-3 col-md-3 m-0 p-0'>
                                            <img src={twitter} className='img-fluid col-12' alt='facebook' />
                                        </div>
                                        <div className='col-9 col-lg-9 col-md-9'>
                                            <p className='text-light'>Twitter</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-2 col-lg-3 col-md-3m-0 p-0'>
                                            <img src={insta} className='img-fluid col-12' alt='facebook' />
                                        </div>
                                        <div className='col-9 col-lg-9 col-md-9'>
                                            <p className='text-light'>Instagram</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='text-light d-flex justify-content-center' />
                    <div className='row'>
                        <div className='col-12 col-lg-8'>
                            <p className='text-light'>  ©  {new Date().getFullYear()}  TurboStart.  All rights reserved</p>
                        </div>
                        <div className='col-12 col-lg-2'>
                            <p className='text-light'>Privacy & Policy</p>
                            </div>
                            <div className='col-12 col-lg-2'>
                            <p className='text-light'> Terms & Condition</p>
                            </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Footer;
