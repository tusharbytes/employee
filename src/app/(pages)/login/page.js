'use client'
import React, { useState } from 'react'
import Input from '@/app/common/Input'
import Link from 'next/link'

function LoginFormPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.email) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'

        if (!formData.password) newErrors.password = 'Password is required'
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            console.log('Login Submitted:', formData)

        }
    }

    return (
    <div className="flex items-center justify-center p-4">
  <div className="flex flex-col md:flex-row max-w-4xl items-center w-full bg-white rounded-lg">
    
    {/* Login Form Section */}
    <div className="md:w-1/2 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={errors.email}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-4 rounded-2xl hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <p className="text-center mt-4">
        Don’t have an account?{' '}
        <Link href="/register" className="text-blue-500 underline">
          Register
        </Link>
      </p>
    </div>

    {/* Image Section */}
    <div className="hidden md:block md:w-1/2">
      <img
        src="/Images/login.png" // or replace with actual path or uploaded image
        alt="Login Illustration"
        className="w-full h-full object-cover rounded-r-lg"
      />
    </div>
  </div>
</div>


    )
}

export default LoginFormPage
