/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react'
import '../styles/style.css'
import TabsToggle from '../component/TabsToggle';

export default function page() {

    const allImages = Array.from({ length: 65 }, (_, i) => `/gallery/Gazawi (${i + 1}).jpg`);

    const [visibleImages, setVisibleImages] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(6);

    useEffect(() => {
        setVisibleImages(allImages.slice(0, count));
    }, [count]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop + 50 >=
                document.documentElement.scrollHeight
            ) {
                // Load 3 more images every scroll near bottom
                setCount((prev) => Math.min(prev + 3, allImages.length));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ marginTop: '200px' }}>
            <h1 style={{ padding: '20px' }} className='gallery-title'>Gazawi&apos;s Gallery</h1>
            <TabsToggle />
            <div className='gallery-container1'>
                {visibleImages.map((src, index) => (
                    <div className='gallery-item1' key={index}>
                        <img src={src} alt={`Image ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    )
}
