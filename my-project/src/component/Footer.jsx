import React from "react";
import Container from "./Container";
import { IoSendOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-black pt-[80px] pb-[40px] border-b-[1px] border-white">
      <Container>
        <div className="flex justify-between pb-[50px] ">
          <div>
            <h5 className="font-Inter font-bold text-[24px] text-white">
              Exclusive
            </h5>
            <h6 className="font-Poppins font-medium text-[20px] text-white my-[24px]">
              Subscribe
            </h6>
            <p className="font-Poppins font-normal text-[16px] text-white">
              Get 10% off your first order
            </p>
            <div className="relative w-[217px] mt-[24px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-[217px] bg-black pl-[16px] text-white placeholder:text-white 
                        py-[12px]"
              />
              <div className="absolute top-[30%] right-3 text-xl text-white">
                <IoSendOutline />
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-Poppins font-medium text-[20px] text-white ">
              Support
            </h5>
            <h6 className="w-[175px] font-Poppins font-normal text-[16px] text-white my-[24px]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </h6>
            <p className="font-Poppins font-normal text-[16px] text-white">
              exclusive@gmail.com
            </p>
            <p className="font-Poppins font-normal text-[16px] text-white mt-[24px]">
              +88015-88888-9999
            </p>
          </div>
          <div>
            <h5 className="font-Poppins font-medium text-[20px] text-white">
              Account
            </h5>
            <p className="w-[175px] font-Poppins font-normal text-[16px] text-white my-[24px]">
              My Account
            </p>
            <p className="w-[175px] font-Poppins font-normal text-[16px] text-white ">
              Login/Register
            </p>
            <p className="w-[175px] font-Poppins font-normal text-[16px] text-white my-[24px]">
              cart
            </p>
            <p className="w-[175px] font-Poppins font-normal text-[16px] text-white ">
              Wishlist
            </p>
            <p className="w-[175px] font-Poppins font-normal text-[16px] text-white ">
              shop
            </p>
          </div>
          <div>
            <h5 className="font-Poppins font-medium text-[20px] text-white">
              Quik Link
            </h5>
            <p className="w-[175px] font-Poppins font-normal text-[16px] text-white my-[24px]">
              Privacy Policy
            </p>
            <p className="w-[175px] font-Poppins font-normal text-[16px] text-white ">
              Terms Of Use
            </p>
            <p className="w-[175px] font-Poppins font-normal text-[16px] text-white my-[24px]">
              FAQ
            </p>
            <p className="w-[175px] font-Poppins font-normal text-[16px] text-white ">
              Contact
            </p>
          </div>
          <div>
            <h4 className="font-Inter font-bold text-[24px] text-white">Download App</h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;