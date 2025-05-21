'use client'
import React, { useState } from 'react'
import Input from '@/app/common/Input'
import Link from 'next/link'

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    company: '',
    dob: '',
    profession: '',
    address: ''
  })

  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState({})
  const [otp, setOtp] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.contact) newErrors.contact = 'Contact is required'
    else if (!/^\d{10}$/.test(formData.contact)) newErrors.contact = 'Enter valid 10-digit number'
    if (!formData.company) newErrors.company = 'Company name is required'
    if (!formData.dob) newErrors.dob = 'DOB is required'
    if (!formData.profession) newErrors.profession = 'Profession is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log('Form Submitted:', formData)
      setStep(1) // Go to next step
    }
  }

  const handleOtpSubmit = () => {
    if (!otp) {
      alert("Please enter OTP")
      return
    }
    alert("OTP Verified! Registration complete.")

    setFormData({
      name: '',
      email: '',
      contact: '',
      company: '',
      dob: '',
      profession: '',
      address: ''
    })
    setOtp('')
    setStep(0)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Register Your Form</h1>

      {step === 0 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" error={errors.name} />
            <Input type='email' label="Email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" error={errors.email} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Contact Number" type='number' name="contact" value={formData.contact} onChange={handleChange} placeholder="Enter your contact number" error={errors.contact} />
            <Input label="Company Name" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name" error={errors.company} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} error={errors.dob} />
            <Input label="Profession" name="profession" value={formData.profession} onChange={handleChange} placeholder="Enter your profession" error={errors.profession} />
          </div>

          <div className="grid grid-cols-1">
            <Input label="Address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" />
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
          <Input
            type='number'
            label="Verify Number (Enter OTP)"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter the OTP sent to your phone"
          />
          <button onClick={handleOtpSubmit} className="bg-green-600 w-full text-white px-6 py-4 rounded-2xl hover:bg-green-700">
            Verify OTP
          </button>
        </div>
      )}
    </div>
  )
}

export default Page
