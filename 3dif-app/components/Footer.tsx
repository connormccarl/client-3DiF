import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-[#002060] text-xl text-white font-sans">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center md:text-left">
            <div className="col-span-full lg:col-span-1 grid md:block justify-center">
                <Image className='bg-white' src='/images/3DiF-Blue.png' alt='3DiF logo' width={250} height={50} />
                <p className='max-w-[250px] text-center text-white text-base'>Inspiring Performance-Based Employees through Vision, Alignment & Execution</p>
            </div>

            <div>
                <h4 className="font-semibold uppercase">Contact Us</h4>

                <div className="mt-3 grid space-y-1 text-neutral-400 text-base">
                    <p>Phone: 571.246.5489</p>
                    <p>Email: info@3dif.co</p>
                    <br />
                    <p>HUBZone Office</p>
                    <p>128 Orange Ave, Ste 237</p>
                    <p>Daytona Beach, FL 32114</p>
                    <br />
                    <p>Unique Entity ID: RHDCBKZ3LN35</p>
                    <p>Cage Code: 6E8B8</p>
                </div>
            </div>

            <div>
                <h4 className="font-semibold uppercase">Useful Links</h4>

                <div className="mt-3 grid space-y-3 text-neutral-400 text-base">
                    <p><Link className="inline-flex gap-x-2 hover:text-white" href="/sitemap">Site Map</Link></p>
                    <p><Link className="inline-flex gap-x-2 hover:text-white" href="/privacypolicy">Privacy Policy</Link></p>
                    <p><Link className="inline-flex gap-x-2 hover:text-white" href="/termsofuse">Terms of Use</Link></p>
                    <p><Link className="inline-flex gap-x-2 hover:text-white" href="/communitysupport">Community Support</Link></p>
                    <p><Link className="inline-flex gap-x-2 hover:text-white" href="https://surveyresearch.co1.qualtrics.com/jfe/form/SV_6R9vY9BmsKlbIr3">Assessment</Link></p>
                </div>
            </div>
        </div>

        <div className="pt-5 mt-5 border-t border-white flex justify-center text-xs">
            Copyright &copy; {new Date(Date.now()).getFullYear()} 3DiF All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer