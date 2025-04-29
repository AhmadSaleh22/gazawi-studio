'use client';

import { useState } from 'react';
import '../styles/style.css';

export default function TabsToggle() {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="tabs-wrapper">
      <span className="dot red"></span>

        <button
          className={activeTab === 'videos' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </button>
        <button
          className={activeTab === 'images' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('images')}
        >
          Images
        </button>

      <span className="dot blue"></span>
    </div>
  );
}