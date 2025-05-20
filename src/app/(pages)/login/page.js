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
        <div className="max-w-md mx-auto mt-10 p-6 rounded  ">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

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
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
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
    )
}

export default LoginFormPage
