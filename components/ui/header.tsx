'use client';
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import { Toaster, toast } from 'sonner';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="logo">
              {/* <svg className="w-8 h-8 fill-current text-purple-800" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg> */}
              <svg  className='w-14 h-14 fill-current text-purple-600 hover:text-purple-700 transition duration-300' viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                    <defs><radialGradient id='tanzanite'><stop stopColor='#5d5dff'/></radialGradient></defs>
                    <path d="M7,5.21a.77.77,0,0,1-.46-1.38A15.46,15.46,0,0,1,16,1c2.66,0,6.48.45,9.5,2.62a.77.77,0,0,1,.18,1.07.78.78,0,0,1-1.08.17A15,15,0,0,0,16,2.53,14,14,0,0,0,7.5,5.05.74.74,0,0,1,7,5.21Z" transform="translate(0)"/>
                    <path d="M28.23,12.26a.78.78,0,0,1-.63-.33C25.87,9.49,22.78,6.24,16,6.24a14,14,0,0,0-11.63,5.7.77.77,0,0,1-1.07.17A.76.76,0,0,1,3.15,11,15.54,15.54,0,0,1,16,4.71c5.61,0,9.81,2.08,12.84,6.34a.77.77,0,0,1-.19,1.07A.79.79,0,0,1,28.23,12.26Z" transform="translate(0)"/>
                    <path d="M12.28,31a.78.78,0,0,1-.72-.49.75.75,0,0,1,.44-1c4.37-1.68,7-5.12,7-9.21a2.8,2.8,0,0,0-3-3c-1.86,0-2.76,1-3,3.35a4.27,4.27,0,0,1-4.52,3.83,4.27,4.27,0,0,1-4.32-4.59A11.71,11.71,0,0,1,16,8.39a12,12,0,0,1,12,11.93,18.66,18.66,0,0,1-1.39,6.5.78.78,0,0,1-1,.41.76.76,0,0,1-.41-1,17.25,17.25,0,0,0,1.27-5.91A10.45,10.45,0,0,0,16,9.92a10.18,10.18,0,0,0-10.38,10,2.77,2.77,0,0,0,2.79,3.06,2.74,2.74,0,0,0,3-2.48c.36-3.11,1.89-4.69,4.56-4.69a4.31,4.31,0,0,1,4.52,4.56c0,4.74-3,8.72-8,10.63A.92.92,0,0,1,12.28,31Z" transform="translate(0)"/>
                    <path d="M19.77,30.28a.81.81,0,0,1-.52-.2.76.76,0,0,1,0-1.08,12.63,12.63,0,0,0,3.54-8.68c0-1.56-.48-6.65-6.7-6.65a6.83,6.83,0,0,0-4.94,1.87A6.17,6.17,0,0,0,9.32,20a.77.77,0,0,1-.77.76h0A.76.76,0,0,1,7.78,20,7.73,7.73,0,0,1,10,14.46a8.34,8.34,0,0,1,6-2.32c6.08,0,8.24,4.4,8.24,8.18A14.09,14.09,0,0,1,20.34,30,.75.75,0,0,1,19.77,30.28Z" transform="translate(0)"/>
                    <path d="M8.66,27.74a14.14,14.14,0,0,1-1.56-.09.76.76,0,1,1,.17-1.52c2.49.28,4.45-.16,5.84-1.32a6.37,6.37,0,0,0,2.12-4.53.75.75,0,0,1,.82-.71.78.78,0,0,1,.72.81A7.89,7.89,0,0,1,14.09,26,8.2,8.2,0,0,1,8.66,27.74Z" transform="translate(0)"/>
              </svg>

            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <div>
                  <Toaster richColors theme='system' />
                </div>
                <button
                  onClick={() => toast.info('Este recurso está sendo implementado.')}
                  className="font-medium z-50 text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-300 ease-in-out"
                >
                  Entrar
                </button>
                {/* <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Entrar
                </Link> */}
              </li>
              <li>
                {/* <button className='disabled:opacity-70'>
                  <Link onClick={() => toast.error('Este recurso é apenas para clientes')} href="/signup" className="btn-sm  text-white bg-purple-700 hover:bg-purple-800 ml-3">
                    Registrar
                  </Link>
                </button> */}
                <button onClick={() => toast.error('Este recurso é exclusivo para clientes', {
                  classNames: {
                    title: 'text-red-400',
                    }, style: { 
                      background: '#faf5ff',  
                      },})} className="btn-sm disabled:opacity-70  text-white bg-purple-700 hover:bg-purple-800 ml-3">
                    Registrar
                </button>
                
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
