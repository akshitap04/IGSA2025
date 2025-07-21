import React from 'react';
import './ProfileImage.css';

export default function ProfileImage({ src, alt, shape = 'square' }) {
  const className = 'profile-image';
  return <img className={className} src={src} alt={alt} />;
}