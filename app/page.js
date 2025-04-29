/* eslint-disable @next/next/no-img-element */
'use client';
import { Parallax } from 'react-scroll-parallax';
import Navbar from './component/Navbar';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Footer from './component/Footer';
import WaveAnimation from './component/Wave';
import Link from 'next/link';

export default function Home() {


  useEffect(() => {
    gsap.from('.gallery-item', {
      y: 50,
      // stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <main>
      {/* Hero Section with Video */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
      }}>

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Foreground Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent background
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0' }}>GAZAWI MEDIA 📸</h1>
          <p style={{ fontSize: '1rem' }}>
            Telling Stories That Matter.
          </p>
        </div>

      </section>

      <section className="hero">
        <WaveAnimation />
        <div className="hero-text">
          <p className="subtitle1">ABOUT GAZAWI MEDIA</p>
          <h1>Highlighting <br />the heart of, the<br />Muslim community<br />one powerful video at a time.</h1>
          <div className="explore-label">
            <p>Explore</p>
            <span>OUR WORKS</span>
          </div>
        </div>
        <div className="hero-description">
          <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#912424' }}><strong>Presented by</strong></p>
          <br />
          <p style={{ fontWeight: 'bold' }}>Gazawi Media</p>
          <p className="small-text">From graduations to Eid prayers, from Ramadan nights to relief efforts — we capture the moments that connect, uplift, and inspire.</p>
          <p className="small-text">Rooted in Chicago and reaching across the U.S. and Canada, we specialize in crafting high-quality media for Islamic organizations and institutions.</p>
          <p className="small-text">Through event highlights, heartfelt documentaries, social media stories, and promotional reels,
            we bring your community’s spirit to life with authenticity and excellence.</p>
          <p className="small-text">Let’s capture your next moment, together.</p>
        </div>
      </section>
      {/* Then your parallax sections continue */}
      <section className="gallery">
        <Parallax>
          <div className="gallery-track">
            {[...Array(8)].map((_, idx) => (
              <div style={{ objectFit: 'cover' }} className="gallery-item" key={idx}>
                <img src={`/gallery/Gazawi (${idx + 1}).jpg`} alt={`Image ${idx + 1}`} loading="lazy" width={'100%'} />
              </div>
            ))}
          </div>
        </Parallax>
      </section>
      <Link href="/gallery">
        <button className="gallery-button">
          <span>Explore Our Works</span>
        </button>
      </Link>
    </main>
  );
}
