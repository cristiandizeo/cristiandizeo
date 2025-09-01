'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Linkedin, Github, Phone, Code } from 'lucide-react'
import { BsChatLeftQuote, BsDiscord } from 'react-icons/bs'
import ContactComponent from './components/ContactComponent'

export default function Contact() {
  return (
    <div className="p-10 flex flex-col items-center justify-center">
      <ContactComponent />
    </div>
  )
}
