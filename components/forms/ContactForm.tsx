'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone || '')
      formDataToSend.append('company', formData.company || '')
      formDataToSend.append('service', formData.service || '')
      formDataToSend.append('message', formData.message)
      formDataToSend.append('_replyto', formData.email)

      const response = await fetch('https://formspree.io/f/xojjqarb', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="name" className="block text-xs font-medium leading-5 text-gray-900">
          Name *
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-medium leading-5 text-gray-900">
          Email *
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium leading-5 text-gray-900">
            Phone
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-medium leading-5 text-gray-900">
            Company
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-medium leading-5 text-gray-900">
          Service Interest
        </label>
        <div className="mt-1">
          <select
            name="service"
            id="service"
            value={formData.service}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary"
          >
            <option value="">Select a service...</option>
            <option value="web-development">Website Development</option>
            <option value="web-applications">Web Applications</option>
            <option value="google-apps-scripts">Google Apps Scripts</option>
            <option value="business-solutions">Business Solutions</option>
            <option value="ai-powered-solutions">AI-Powered Solutions</option>
            <option value="process-automation">Process Automation</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium leading-5 text-gray-900">
          Message *
        </label>
        <div className="mt-1">
          <textarea
            name="message"
            id="message"
            rows={3}
            required
            value={formData.message}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
        </button>
      </div>

      <div className="text-xs text-gray-500 mt-3">
        By submitting this form, you agree to our <Link href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</Link>. 
        We'll only use your information to respond to your enquiry in accordance with GDPR.
      </div>

      {status === 'success' && (
        <div className="rounded-md bg-green-50 p-3">
          <p className="text-xs text-green-800">
            Thank you! We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-md bg-red-50 p-3">
          <p className="text-xs text-red-800">
            Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}
    </form>
  )
}
