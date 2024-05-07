'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)


  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          {/* <div className="bg-slate-800 opacity-80 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-slate-500 inline-flex">
              <a
                className="font-medium hover:underline text-slate-50"
                href="https://github.com/cruip/open-react-template"
                target="_blank"
                rel="noreferrer"
              >
                Download<span className="hidden sm:inline"> on GitHub</span>
              </a>{' '}
              <span className="italic px-1.5">or</span>{' '}
              <a className="font-medium hover:underline text-emerald-400" href="https://cruip.com/open-pro/" target="_blank" rel="noreferrer">
                Check Premium Version
              </a>
            </div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div> */}
          
          <button
            className="fixed bottom-9 z-1 right-10 bg-purple-700 hover:bg-purple-800 text-white px-2 py-2 rounded-full shadow-lg flex items-center opacity-50 hover:opacity-100 transition duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24">
              <path d="M12 4L6 10M12 4L18 10M12 4L12 14.5M12 20V17.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
