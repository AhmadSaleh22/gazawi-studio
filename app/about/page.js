/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import '../styles/style.css'

export default function page() {
    return (
        <div className='about-page' style={{ display: 'flex', flexDirection: 'row', gap: '60px' }}>
            <div className='about-container'>
                <h1 className='about-title'>About Gazawi</h1>
                <p className='about-text1'>Every moment deserves to be captured. Every story deserves to be told.</p>
                <p className='about-text2'><strong style={{ color: '#912424' }}>At Gazawi Media, </strong> we believe in highlighting the heart of the Muslim community, one powerful video at a time.</p>
                <p className='about-text2'>From graduations to Eid prayers, from Ramadan nights to relief efforts. We film the moments that connect, uplift, and inspire.</p>
                <p className='about-text'>Based in Chicago, serving across the U.S. and Canada, we specialize in high-quality media production for Islamic organizations and institutions!</p>
                <br />
                <br />
                <strong className='about-text' style={{ color: '#912424' }}>Our services include</strong>
                <br />
                <br />
                <ul>
                    <li>Event coverage &amp; community highlights</li>
                    <li>Documentaries &amp; interviews</li>
                    <li>Social media content &amp; donor reports</li>
                    <li>Promotional videos &amp; recap reels</li>
                </ul>
            </div>
            <img src={'/gallery/Gazawi (1).jpg'} alt='' style={{
                height: '100vh',
                width: '50%',
                objectFit: 'cover',
                opacity: '0.8',
            }} />
        </div>
    )
}
