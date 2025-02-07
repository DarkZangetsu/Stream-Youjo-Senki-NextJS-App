"use client";

import React from 'react';
import { Github, Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900/95 text-gray-300 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo et Description */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
                            Youjo Senki
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400 max-w-md">
                            Un projet personnel dédié à l'univers de Youjo Senki (Saga of Tanya the Evil).
                            Explorez l'histoire fascinante de Tanya Degurechaff dans un monde mêlant magie et stratégie militaire.
                        </p>
                    </div>

                    {/* Liens Rapides */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold tracking-wide uppercase text-sm">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="relative">
                                        Accueil
                                        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                                    <span className="relative">
                                        Contact
                                        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Réseaux Sociaux */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold tracking-wide uppercase text-sm">Suivez-moi</h4>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/DarkZangetsu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='p-2 rounded-full hover:bg-gray-800 transition-colors duration-200'
                            >
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Youjo Senki. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;