import React from 'react';
import ContactImg from '../../public/assets/banner.png';
import Image from "next/image";
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebook, FaGithub, FaLinkedinIn, FaTelegram} from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen px-6 sm:p-4 xl:mb-28 md:mb-32 py-6'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>

          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Seyha Vorn</h2>
                <p>Full Stack Web Developer</p>
                <p className='py-4'>
                  I work with the Back End or server side of the application as well as the Front End, or client side.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  <a href="https://www.linkedin.com/in/seyha-vorn/" target='_blank'
                     rel='noreferrer'>
                    <div
                      className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <FaLinkedinIn/>
                    </div>
                  </a>
                  <a href="https://t.me/SeyhaVorn" target='_blank'
                        rel='noreferrer'>
                    <div
                      className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <FaTelegram/>
                    </div>
                  </a>
                  <a href="https://facebook.com/seyha.vornn/" target='_blank'
                        rel='noreferrer'>
                    <div
                      className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <FaFacebook/>
                    </div>
                  </a>
                  <a href="https://github.com/SeyhaVORN" target='_blank'
                     rel='noreferrer'>
                    <div
                      className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <FaGithub/>
                    </div>
                  </a>
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target='_blank'
                        rel='noreferrer'>
                    <div
                      className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <AiOutlineMail/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action=''
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name' placeholder='Seyha'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                      placeholder='0964096066'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    placeholder='vornseyha4758@gmail.com'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    placeholder='computer science'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/*<div className='flex justify-center py-12'>*/}
        {/*  <Link href='/'>*/}
        {/*    <a>*/}
        {/*      <div*/}
        {/*        className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>*/}
        {/*        <HiOutlineChevronDoubleUp*/}
        {/*          className='text-[#5651e5]'*/}
        {/*          size={30}*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*    </a>*/}
        {/*  </Link>*/}
        {/*</div>*/}

      </div>
    </div>
  );
}

export default Contact;