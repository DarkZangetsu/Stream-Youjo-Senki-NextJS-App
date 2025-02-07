"use client";

import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm text-white shadow-lg border-b border-gray-800">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo Youjo */}
                    <div className='flex-shrink-0'>
                        <Link href="/" className='text-xl font-bold tracking-tight hover:text-gray-300 transition-colors'>
                            Youjo Senki
                        </Link>
                    </div>

                    {/* Liens de Navigation */}
                    <div className='flex items-center space-x-8'>
                        <Link href="/"
                            className='relative group px-3 py-2 text-sm font-medium hover:text-gray-300 transition-colors duration-200'
                        >
                            <span>Accueil</span>
                            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
                        </Link>

                        <Link href="https://github.com/DarkZangetsu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-2 rounded-full hover:bg-gray-800 transition-colors duration-200'
                        >
                            <Github className='w-5 h-5' />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}