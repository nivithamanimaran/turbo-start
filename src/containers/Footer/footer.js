import React from 'react';
import logo from '../../assests/logo.svg'

function Footer() {
    return (
        <>
            <div className='footbgcolor py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src={logo} alt='logo' className='img-fluid' />
                            <p className='text-light my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing aebit elit.</p>
                            <div className='row'>
                                <div className='col'>
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
                        <div className='col-8'>
                            <div className='row justify-content-center'>
                                <div className='col-3'>
                                    <p className='h4 text-light mb-5'>About</p>
                                    <p className='text-light'>How it works</p>
                                    <p className='text-light'>Featured </p>
                                    <p className='text-light'>Partnership </p>
                                    <p className='text-light'>Bussiness Relation</p>
                                </div>
                                <div className='col-3'>
                                    <p className='h4 text-light mb-5'>Community</p>
                                    <p className='text-light'>Events </p>
                                    <p className='text-light'>Blog </p>
                                    <p className='text-light'>Podcast  </p>
                                    <p className='text-light'>Invite a friend</p>
                                </div>
                                <div className='col-3'>
                                    <p className='h4 text-light'>Socials</p>
                                    <p>How it works</p>
                                    <p>Featured </p>
                                    <p>Partnership </p>
                                    <p>Bussiness Relation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;
