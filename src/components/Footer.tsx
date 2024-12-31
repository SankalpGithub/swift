import React from 'react'
import Image from 'next/image'
import TwitterLogo from '../../public/twitterLogo.png'
import FacebookLogo from "../../public/facebookLogo.png"
import InstagramLogo from "../../public/instagramLogo.png"
import GithubLogo from "../../public/githubLogo.png"
import GpayLogo from '../../public/GpayLogo.png'
import applepayLogo from '../../public/applepayLogo.png'
import paypalLogo from '../../public/paypalLogo.png'
import mastercardLogo from '../../public/masterCardLogo.png'
import visaLogo from '../../public/visaLogo.png'

function Footer() {
  return (
    <div className='relative w-full h-589px bg-primaryWhite flex flex-col items-center'>
        <div className='absolute z-20 top-0 w-3/4'>
      <div className=" subscribe w-full h-180px bg-primaryBlack rounded-2xl flex items-center justify-around">
        <div className='headingText text-primaryWhite text-4xl w-1/3'>STAY UPTO DATE ABOUT OUR LATEST OFFER</div>
        <div className='w-1/4 h-full flex flex-col justify-center'>
        <div className="searchBox my-2 bg-primaryWhite w-full h-14 rounded-full flex items-center py-5">
        <input
          placeholder="Enter Your Email Address"
          className="text-sm w-full bg-transparent decoration-transparent mx-3 focus:outline-none"
        />
      </div>
        <button className='bg-primaryWhite my-2 w-full h-14 rounded-full flex items-center justify-center'>Subscribe to Newsletter</button>
        </div>

        
      </div>

      <div className='w-full py-14 flex flex-row'>

      <div className='w-1/5 mr-40'>
        <h1 className="headingText font-bold text-4xl ">SWIFT</h1>
        <p className='my-5 text-gray-400'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

        <div className='flex flex-row justify-between w-1/2 '>

        <div className="twitterLogo bg-primaryWhite w-6 h-6 p-2 rounded-full flex justify-center items-center">
        <button className='w-full h-8 flex justify-center items-center'>
          <Image src={TwitterLogo} alt="twitterLogo" />
        </button>
      </div>

      <div className="facebookLogo bg-primaryBlack w-6 h-6 p-2 rounded-full flex justify-center items-center">
        <button className='w-full h-8 justify-center items-center'>
          <Image src={FacebookLogo} alt="facebook logo" />
        </button>
      </div>

      <div className="instagramLogo bg-primaryWhite w-6 h-6 p-2 rounded-full flex justify-center items-center">
        <button className='w-full h-8 justify-center items-center'>
          <Image src={InstagramLogo} alt="instagramLogo" />
        </button>
      </div>

      <div className="githubLogo bg-primaryWhite w-6 h-6 p-2 rounded-full flex justify-center items-center">
        <button className='w-full h-8 justify-center items-center'>
          <Image src={GithubLogo} alt="githubLogo" />
        </button>
      </div>
        </div>


      </div>

      <div className='w-1/5'>
      <p className='mb-7 tracking-widest'>COMPANY</p>

      <div className='flex h-4/5 flex-col text-text-gray-400 justify-between items-start'>
      <p className='text-gray-400'>About</p>
      <p className='text-gray-400'>Features</p>
      <p className='text-gray-400'>Works</p>
      <p className='text-gray-400'>Career</p>
      </div>
      </div>

      <div className='w-1/5'>
      <p className='mb-7 tracking-widest'>HELP</p>

      <div className='flex h-4/5 flex-col justify-between items-start'>
      <p className='text-gray-400'>Customer Support</p>
      <p className='text-gray-400'>Delivery Details</p>
      <p className='text-gray-400'>Terms And Conditions</p>
      <p className='text-gray-400'>Privacy Policy</p>
      </div>
      </div>

      <div className='w-1/5'>
      <p className='mb-7 tracking-widest'>FAQ</p>

      <div className='flex h-4/5 flex-col justify-between items-start'>
      <p className='text-gray-400'>Accounts</p>
      <p className='text-gray-400'>Manage Deliveries</p>
      <p className='text-gray-400'>Orders</p>
      <p className='text-gray-400'>Payments</p>
      </div>
      </div>

      <div className='w-1/5'>
      <p className='mb-7 tracking-widest'>RESOURCES</p>

      <div className='flex h-4/5 flex-col justify-between items-start'>
      <p className='text-gray-400'>Free eBooks</p>
      <p className='text-gray-400'>Development Tutorials</p>
      <p className='text-gray-400'>How to - Blog</p>
      <p className='text-gray-400'>Youtube Playlist</p>
      </div>
      </div>

      </div>

      <div className='w-full h-0.5 bg-slate-400'>

      </div>

      <div className='flex flex-row items-center justify-between mt-3'>
        <p className='text-gray-400'>Swift © 2000-2023, All Rights Reserved</p>
        <div>
          <button>
            <Image src={visaLogo} alt='gpayloago'/>
          </button>

          <button>
            <Image src={mastercardLogo} alt='mastercardLogo'/>
          </button>

          <button>
            <Image src={paypalLogo} alt='paypalLogo'/>
          </button>

          <button>
            <Image src={applepayLogo} alt='applepayLogo'/>
          </button>

          <button>
            <Image src={GpayLogo} alt='gpayloago'/>
          </button>
        </div>
      </div>


      </div>

      <div className="absolute z-10 bottom-0 content w-full h-499px bg-searchGrey">
      

      </div>

    </div>
  )
}

export default Footer
