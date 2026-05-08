"use client"
import React, { FormEvent, useState } from 'react'
import { MultiSelect } from 'react-multi-select-component';
        

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredContact, setPreferredContact] = useState([]);
  const [interest, setInterest] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const contactOptions = [
    { value: 'Text', label: 'Text' },
    { value: 'Phone', label: 'Phone' },
    { value: 'Email', label: 'Email' }
  ];

  const interestOptions = [
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'VA SDVOSB-CVE', label: 'VA SDVOSB-CVE' },
    { value: 'SBA Certified 8a', label: 'SBA Certified 8a' },
    /*{ value: 'SBA Certified HUBZone', label: 'SBA Certified HUBZone' },*/
    { value: 'SBA Certified WOSB', label: 'SBA Certified WOSB' }
  ];

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setTitle('');
    setCompany('');
    setCompanyUrl('');
    setPhone('');
    setPreferredContact([]);
    setInterest([]);
    setMessage('');
  }

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-digits

    let formattedNumber = "";

    if (inputValue.length > 0) {
      formattedNumber = `(${inputValue.slice(0, 3)}`;
    }
    if (inputValue.length > 3) {
      formattedNumber += `) ${inputValue.slice(3, 6)}`;
    }
    if (inputValue.length > 6) {
      formattedNumber += `-${inputValue.slice(6, 10)}`;
    }

    setPhone(formattedNumber);
  };
  
  const onSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    // send email
    const data = {
      firstName,
      lastName,
      email,
      title,
      company,
      companyUrl,
      phone,
      message,
      preferredContact: preferredContact.map((element: any) => element.value),
      interest: interest.map((element: any) => element.value)
    }

    //console.log(data);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    const responseData = await response.json();
    alert(responseData['message']);
    
    resetForm();
    setLoading(false);
  }

  return (
    <main>
      <div className='flex justify-center'>
          <p className='pageTitle mb-2'>Contact Us</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <form onSubmit={onSubmit} noValidate className='group md:col-span-2'>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-10">
              <h2 className="text-xl font-semibold leading-7">Teaming Inquiry</h2>
              <p className="mt-1 text-base leading-6 text-gray-600">Please provide the information below to explore a teaming relationship with 3DiF.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="firstName" className="block text-lg font-medium leading-6">
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      id="firstName"
                      autoComplete="givenName"
                      className="peer block w-full rounded-md border-gray-300 text-lg sm:leading-6"
                      required
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="lastName" className="block text-lg font-medium leading-6">
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      id="lastName"
                      autoComplete="familyName"
                      className="peer block w-full rounded-md border-gray-300 text-lg sm:leading-6"
                      required
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label htmlFor="email" className="block text-lg font-medium leading-6">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      autoComplete="email"
                      className="peer block w-full rounded-md border-gray-300 text-lg sm:leading-6"
                      required
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="title" className="block text-lg font-medium leading-6">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      id="title"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      autoComplete="title"
                      className="block w-full rounded-md border-gray-300 text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="company" className="block text-lg font-medium leading-6">
                    Company
                  </label>
                  <div className="mt-2">
                    <input
                      id="company"
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      autoComplete="company"
                      className="block w-full rounded-md border-gray-300 text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label htmlFor="companyUrl" className="block text-lg font-medium leading-6">
                    Company URL
                  </label>
                  <div className="mt-2">
                    <input
                      id="companyUrl"
                      value={companyUrl}
                      onChange={e => setCompanyUrl(e.target.value)}
                      autoComplete="companyUrl"
                      className="block w-full rounded-md border-gray-300 text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="phone" className="block text-lg font-medium leading-6">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      value={phone}
                      onChange={e => handlePhoneNumber(e)}
                      autoComplete="phone"
                      className="peer block w-full rounded-md border-gray-300 text-lg sm:leading-6"
                      required
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="preferredContact" className="block text-lg font-medium leading-6">
                    Preferred method of contact
                  </label>
                  <div className="mt-2">
                    <MultiSelect
                        options={contactOptions}
                        value={preferredContact}
                        onChange={setPreferredContact}
                        labelledBy='Select'
                        className='rounded-md text-lg sm:leading-6'
                      />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label htmlFor="interest" className="block text-lg font-medium leading-6">
                    Interest
                  </label>
                  <div className="mt-2">
                    <MultiSelect
                      options={interestOptions}
                      value={interest}
                      onChange={setInterest}
                      labelledBy='Select'
                      className='rounded-md text-lg sm:leading-6'
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="message" className="block text-lg font-medium leading-6">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={4}
                      className="block w-full rounded-md border-gray-300 text-lg sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-x-6">
            <div className='italic mb-6'>
              Prior to submission, please review that all information has been entered correctly.
            </div>
            <button
              type="submit"
              className="rounded-md bg-[#002060] px-20 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#D4B251] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 group-invalid:pointer-events-none group-invalid:opacity-30"
            >
              {loading ? 
                <svg className="animate-spin text-gray-300 h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              :
                "Send Message"
              }
            </button>
          </div>
        </form>
        <div className='md:col-span-1'>
          <div className="text-xl font-semibold leading-7">
            General Contact Information
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              HUBZone Office
            </div>
            <div className='mt-1'>
              128 Orange Ave, Ste 237<br/>
              Daytona Beach, FL 32114
            </div>
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              Hours Of Operations - EST
            </div>
            <div className='mt-1'>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Monday<br/>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Tuesday<br/>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Wednesday<br/>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Thursday<br/>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Friday
            </div>
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              Voice Phone
            </div>
            <div className='mt-1'>
              571.246.5489
            </div>
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              Primary Contact
            </div>
            <div className='mt-1'>
              info@3dif.co
            </div>
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              After Hours Email
            </div>
            <div className='mt-1'>
              inform@3dif.co
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactUs