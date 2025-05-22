'use client'
import React, { useState } from 'react'

import Link from 'next/link'
// import { useDarkMode } from '@/app/common/UseTogleContext'/
import { useDarkMode } from '@/app/common/UseTogleContext'
import Input from '@/app/common/Input'

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    company: '',
    dob: '',
    profession: '',
    address: '',
    password: ''
  })

  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState({})
  const [otp, setOtp] = useState('')
      const { darkMode, setDarkMode } = useDarkMode();
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateAge = (dob) => {
    const birthDate = new Date(dob)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const validateStep0 = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.company) newErrors.company = 'Company name is required'
    if (!formData.dob) newErrors.dob = 'DOB is required'
    else if (calculateAge(formData.dob) < 18) newErrors.dob = 'You must be at least 18 years old'
    if (!formData.profession) newErrors.profession = 'Profession is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.contact || formData.contact.length < 10) newErrors.contact = 'Valid contact number is required'
    if (!otp) newErrors.otp = 'OTP is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep0()) {
      setStep(1)
    }
  }

  const handleOtpSubmit = () => {
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleFinalSubmit = () => {
    if (validateStep2()) {
      console.log('Final Data Submitted:', formData)
      alert("Registration Complete!")
      setFormData({
        name: '',
        email: '',
        contact: '',
        company: '',
        dob: '',
        profession: '',
        address: '',
        password: ''
      })
      setOtp('')
      setStep(0)
    }
  }

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white"} min-h-screen`}>
      
  <div className="max-w-4xl mx-auto p-6 flex items-center justify-between gap-4">
    <div className={`w-full md:w-1/2 ${step === 1 || step === 2 ? "h-[94vh]" : ""}`}>
      <h1 className="text-2xl font-bold text-center mb-4">
        {step === 0 ? "Register Your Form" : step === 1 ? "Verify OTP" : "Set Password"}
      </h1>

      {step === 0 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1">
            <Input label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" error={errors.name} />
            <Input type="email" label="Email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" error={errors.email} />
          </div>

          <div className="grid grid-cols-1">
            <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} error={errors.dob} />
            <Input label="Profession" name="profession" value={formData.profession} onChange={handleChange} placeholder="Enter your profession" error={errors.profession} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className={`mb-1 text-sm font-medium text-gray-700 ${darkMode ? "bg-black text-white" : "bg-white"}`}>Company Name</label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                error={errors.company}
              />
            </div>

            <div className="flex flex-col">
              <label className={`mb-1 text-sm font-medium text-gray-700 ${darkMode ? "bg-black text-white" : "bg-white"}`}>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] `}
              />
            </div>
          </div>

          <div className="text-center w-full">
            <button type="submit" className="bg-blue-600 w-full text-white px-6 py-4 rounded-2xl hover:bg-blue-700">
              Submit
            </button>
          </div>

          <p className="text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <Input label="Contact Number" type="number" name="contact" value={formData.contact} onChange={handleChange} placeholder="Enter your contact number" error={errors.contact} />
          <Input
            type="number"
            label="Verify Number (Enter OTP)"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter the OTP sent to your phone"
            error={errors.otp}
          />
          <button onClick={handleOtpSubmit} className="bg-green-600 w-full text-white px-6 py-4 rounded-2xl hover:bg-green-700">
            Verify OTP
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <Input
            type="password"
            label="Set Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Set password for login"
            error={errors.password}
          />
          <button onClick={handleFinalSubmit} className="bg-purple-600 w-full text-white px-6 py-4 rounded-2xl hover:bg-purple-700">
            Complete Registration
          </button>
        </div>
      )}
    </div>

    {step === 0 && (
      <div className="hidden md:block">
        <img src="/Images/register.png" className="h-[700px] rounded-2xl" />
      </div>
    )}
  </div>
</div>

  )
}

export default Page
