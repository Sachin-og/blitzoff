// ComingSoon.jsx
import React, { useEffect, useState, useRef } from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  const bubbleContainerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calculate the remaining time until February 1, 2025
  useEffect(() => {
    const targetDate = new Date('February 1, 2025 00:00:00').getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) clearInterval(countdown);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // Bubble animation effect
  useEffect(() => {
    const container = bubbleContainerRef.current;
    const bubbles = [];

    const createBubble = () => {
      const bubble = document.createElement('div');
      const size = Math.random() * 60 + 20;
      bubble.classList.add('bubble');
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 20 + 10}s`;
      bubble.style.animationDelay = `-${Math.random() * 20}s`;
      container.appendChild(bubble);
      bubbles.push(bubble);
    };

    for (let i = 0; i < 20; i++) createBubble();
    const interval = setInterval(createBubble, 3000);

    return () => {
      clearInterval(interval);
      bubbles.forEach(bubble => container.removeChild(bubble));
    };
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="bubble-container" ref={bubbleContainerRef}></div>
      <div className="content">
        <h1>Blitzschlag 25</h1>
        <h2>Coming Soon</h2>
        <div className="timer">
          <span>{timeLeft.days}d </span>
          <span>{timeLeft.hours}h </span>
          <span>{timeLeft.minutes}m </span>
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
