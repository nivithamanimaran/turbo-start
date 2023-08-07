import React from 'react';
import Navbar from '../Navbar/navbar';
import { GiStarsStack } from 'react-icons/gi';
import Coverimg from '../../assests/home/homecover.png';

function HomePage() {
    return (
        <>
            <Navbar />
            <div className='container-fluid my-5 position-relative'>
                <div className='row '>
                    <div className='col d-flex justify-content-center '>
                        <button className='btn border  rounded-5 headtextcolor'><GiStarsStack className='iconrotate' /> Take flight with us</button>
                    </div>
                </div>
                <div className='row '>
                    <div className='col position-absolute homecovertext'>
                        <p className='h1 text-center color'>From here, You can only go up</p>
                        <p className='headtextcolor text-center'>We back remarkable individuals with passion</p>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-12 position-absolute cardposition'>
                        <div className='row justify-content-center gap-5'>
                            <div className='col-3 border border-1 rounded-3'>
                                <div className='row py-3'>
                                    <div className='col-11'>
                                        <ul>
                                            <li><p>Let Our Control Center Propel Your Ideas into the Right Orbit!</p></li>
                                        </ul>
                                        {/* <p className='headtextcolor'>Let Our Control Center Propel Your Ideas into the Right Orbit!</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className='col-3 border border-1 rounded-3'>
                                <div className='row py-3'>
                                    <div className='col-1'>
                                    </div>
                                    <div className='col-11'>
                                        <p className='headtextcolor'>Chart Your Trajectory with Global Presence, Mentors & Growth Partners</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-3 border border-1 rounded-3'>
                                <div className='row py-3'>
                                    <div className='col-1'>

                                    </div>
                                    <div className='col-11'>
                                        <p className='headtextcolor'>Harness the Power of 6 Stellar Centers of Excellence to Refine Your Product and Conquer the Market!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col p-0'>
                        <img src={Coverimg} alt='Coverimg' className='img-fluid col-12' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
