import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Paymentbrands from "../public/Payment brands.svg";
export default function Footer() {
  return (
    <div className="text-white pb-8 bg-no-repeat bg-contain bg-top">
      <div
        className="bg-custom h-20 bg-no-repeat  w-full bg-auto"
        style={{ backgroundImage: "url(./c2.svg)" }}
      ></div>

      <div className="px-3 mt-8 md:px-7 w-100 mx-auto xl:w-4/6">
        <div className="col-span-2 ">
          <Image src="/Takealot Logo.svg" alt="logo" width={98} height={38}  priority/>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="grid grid-cols-1 xl:col-span-2"></div>

          <div className="mt-6 md:mt-0 xl:pl-8 ">
            <div className="font-bold text-lg mb-4 text-black">About Us</div>

            <div className="text-sm flex flex-col space-y-2 text-black">
              <Link href="/">Careers</Link>

              <Link href="/ ">Chocolate</Link>

              <Link href="/">Sell on Takealot</Link>

              <Link href="/">Deliver for Takealot</Link>

              <Link href="/ ">Press & News</Link>

              <Link href="/ ">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 md:mt-4 xl:mt-0">
          <div className="mt-4 md:mt-0 col-span-2 ">
            <div className="font-bold text-xl text-black ">
              Subscribe to our newsletter
            </div>

            <div className="flex">
              <div className="xl:w-full w-full mt-4 md:w-[75%] sm:w-full">
                <div className="relative">
                  <input
                    type="text"
                    className="bg-gray-100 h-12 w-full border-0 px-4 rounded-full focus:outline-none hover:cursor-pointer"
                    placeholder="Your email address"
                  />

                  <button className="h-full rounded-full primary-button absolute top-0 right-0 text-sm p-3 text-white font-bold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="outline outline-offset-2 outline-4 ">
            <div className="mt-4 md:mt-0 font-bold text-xl xl:mt-4"></div>

            <div className="flex space-x-2 mt-4">
              <div className="p-2 rounded-fullflex">
                <FaGithub size={28} />
              </div>

              <div className="p-2 rounded-fullflex">
                <FaInstagram size={28} />
              </div>

              <div className="p-2 rounded-full flex">
                <FaFacebook size={28} />
              </div>
            </div>

            <div className="flex">
              <Image src={Paymentbrands} alt="Payment brands ect"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
