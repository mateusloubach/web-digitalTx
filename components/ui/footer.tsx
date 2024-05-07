'use client';
import React from 'react'
import { Link } from 'react-scroll';

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link to="hero" spy={true} smooth={true} duration={750} className="inline-block" aria-label="Print">
                  <svg  className='w-14 h-14 fill-current text-purple-600 hover:text-purple-700' viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                    <defs><radialGradient id='tanzanite'><stop stopColor='#5d5dff'/></radialGradient></defs>
                    <path d="M7,5.21a.77.77,0,0,1-.46-1.38A15.46,15.46,0,0,1,16,1c2.66,0,6.48.45,9.5,2.62a.77.77,0,0,1,.18,1.07.78.78,0,0,1-1.08.17A15,15,0,0,0,16,2.53,14,14,0,0,0,7.5,5.05.74.74,0,0,1,7,5.21Z" transform="translate(0)"/>
                    <path d="M28.23,12.26a.78.78,0,0,1-.63-.33C25.87,9.49,22.78,6.24,16,6.24a14,14,0,0,0-11.63,5.7.77.77,0,0,1-1.07.17A.76.76,0,0,1,3.15,11,15.54,15.54,0,0,1,16,4.71c5.61,0,9.81,2.08,12.84,6.34a.77.77,0,0,1-.19,1.07A.79.79,0,0,1,28.23,12.26Z" transform="translate(0)"/>
                    <path d="M12.28,31a.78.78,0,0,1-.72-.49.75.75,0,0,1,.44-1c4.37-1.68,7-5.12,7-9.21a2.8,2.8,0,0,0-3-3c-1.86,0-2.76,1-3,3.35a4.27,4.27,0,0,1-4.52,3.83,4.27,4.27,0,0,1-4.32-4.59A11.71,11.71,0,0,1,16,8.39a12,12,0,0,1,12,11.93,18.66,18.66,0,0,1-1.39,6.5.78.78,0,0,1-1,.41.76.76,0,0,1-.41-1,17.25,17.25,0,0,0,1.27-5.91A10.45,10.45,0,0,0,16,9.92a10.18,10.18,0,0,0-10.38,10,2.77,2.77,0,0,0,2.79,3.06,2.74,2.74,0,0,0,3-2.48c.36-3.11,1.89-4.69,4.56-4.69a4.31,4.31,0,0,1,4.52,4.56c0,4.74-3,8.72-8,10.63A.92.92,0,0,1,12.28,31Z" transform="translate(0)"/>
                    <path d="M19.77,30.28a.81.81,0,0,1-.52-.2.76.76,0,0,1,0-1.08,12.63,12.63,0,0,0,3.54-8.68c0-1.56-.48-6.65-6.7-6.65a6.83,6.83,0,0,0-4.94,1.87A6.17,6.17,0,0,0,9.32,20a.77.77,0,0,1-.77.76h0A.76.76,0,0,1,7.78,20,7.73,7.73,0,0,1,10,14.46a8.34,8.34,0,0,1,6-2.32c6.08,0,8.24,4.4,8.24,8.18A14.09,14.09,0,0,1,20.34,30,.75.75,0,0,1,19.77,30.28Z" transform="translate(0)"/>
                    <path d="M8.66,27.74a14.14,14.14,0,0,1-1.56-.09.76.76,0,1,1,.17-1.52c2.49.28,4.45-.16,5.84-1.32a6.37,6.37,0,0,0,2.12-4.53.75.75,0,0,1,.82-.71.78.78,0,0,1,.72.81A7.89,7.89,0,0,1,14.09,26,8.2,8.2,0,0,1,8.66,27.74Z" transform="translate(0)"/>
                    
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</a>
                  </li>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</a>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</a>
                  </li>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</a>
                  </li>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</a>
                  </li>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</a>
                  </li>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</a>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</a>
                  </li>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</a>
                  </li>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</a>
                  </li>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</a>
                  </li>
                  <li className="mb-1">
                    <a href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <a href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </a>
              </li>
            </ul>


            {/* Copyright note */}
            <div className="text-gray-400 text-sm mr-4">&copy; {currentYear} <a href='https://mateusloubach.tech'>mateusloubach</a>. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
