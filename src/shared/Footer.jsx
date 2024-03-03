import React from 'react'
import Container from '../components/Container'

const Footer = () => {
    return (
        <div className='w-full bg-[#02033B] mt-24'>
            <Container className=" w-[1056px] ">
                <div className='flex flex-col md:flex-row px-20 py-12 justify-between '>
                    {/* 1 */}
                    <div className='flex flex-col w-[312px]'>
                        {/* left */}
                        <div className=''>
                            <p className='footer-typo'>Scan. Detect. Remove.</p>
                            <div className='grid grid-cols-3 gap-10 mt-[78px]'>
                                <img src="https://i.ibb.co/gZdwc7n/svg.png" alt="" />
                                <img src="https://i.ibb.co/b2JqkX5/svg-1.png" alt="" />
                                <img src="https://i.ibb.co/Pz567px/svg-2.png" alt="" />
                            </div>
                            <div className='mt-6 link '>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms of Service</a></li>
                            </div>
                        </div>
                        <div className=' mt-12 link-p'>
                            <p>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                            <p className='mt-3'>Designed & developed by Bigger Picture</p>

                        </div>
                    </div>
                    {/* middle */}
                    <div className=' w-[188px] gap-15'>
                        <p className='miro'>Miro.</p>
                        <div className='miro-p'>
                            <p className='flex place-items-center mt-5'><span><hr className='text-[#FFC247] mr-2 border w-3.5' /></span> iPhone</p>
                            <p className='flex place-items-center mt-5'><span><hr className='text-[#FFC247] mr-2 border w-3.5' /></span>Android</p>
                            <p className='flex place-items-center mt-5'><span><hr className='text-[#FFC247] mr-2 border w-3.5' /></span>Help</p>
                            <p className='flex place-items-center mt-5'><span><hr className='text-[#FFC247] mr-2 border w-3.5' /></span>About</p>
                            <p className='flex place-items-center mt-5'><span><hr className='text-[#FFC247] mr-2 border w-3.5' /></span>Insights</p>
                        </div>
                    </div>
                    {/* right */}
                    <div className='bg-[#FFC247]  mt-5 md:mt-0 md:w-[436px] md:h-[270px] signup'>
                        <p className="signup-p">Sign up to our newsletter</p>
                        <p className='form-p'>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>

                        <div class="relative flex h-10 mt-10 w-full flex-row overflow-clip rounded-lg">
                            <input class="peer w-full rounded-l-full border px-2  text-[#02033B80] transition-colors duration-300 pl-[10px] focus:outline-none" type="text" name="domain" id="domain" placeholder="Email address" />
                            <label class="flex items-center rounded-r-full border text-white px-2 text-sm  bg-[#02033B] transition-colors duration-300 object-cover w-[100px]" for="domain">Submit</label>
                        </div>


                    </div>
                </div>
                <div className='md:w-[550px] flex flex-col md:flex-row px-20 py-14'>
                    <p className='link-p'>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
                </div>
            </Container>
        </div>
    )
}

export default Footer