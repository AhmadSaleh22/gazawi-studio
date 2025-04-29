'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/style.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null)


    useEffect(() => {
        function handleClickOutside(event) {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);


    return (
        <div ref={navbarRef} className='navbar'>
            <Link href="/" className='logo'>
                <Image width={100} height={80} src="/logo.png" alt="Logo" />
            </Link>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link href="/" className='nav-link' onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/about" className='nav-link' onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/gallery" className='nav-link' onClick={() => setMenuOpen(false)}>Gallery</Link>
            </div>

        </div>
    );
}
