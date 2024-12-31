import Link from "next/link";
import { Roboto } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 
const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
})
   

export default function homepageLayout({children,}: {children: React.ReactNode}) {
    return (
        <div>

    {/* offer bar */}
        <div className="offerbar w-full h-8 bg-primaryBlack flex justify-center">
            <p className="text-primaryWhite text-sm my-1">Sign Up and get 20% off on your first order.</p>
            <br></br>
            <Link href='#' className="text-primaryWhite text-sm underline underline-offset-2 ml-2 my-1 font-semibold"> Sign up now</Link>
        </div>

        {/* Navbar */}
        <Navbar/>


        {children}
        <Footer/>
        </div>
    )
  }