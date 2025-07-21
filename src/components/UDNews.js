import React from 'react';
import './UDNews.css'; // Optional: if you're using external styles
import Navbar from './Navbar';
import Footer from './Footer';
export default function UDNews() {
  const newsData = [
    {
      title: 'Spilling the culture beans: A look into International Coffee Hour',
      description:
        'On Oct. 27, the Center for Global Programs and Services (CGPS) and the Indian Graduate Student Association (IGSA) held their International Coffee Hour event, celebrating Diwali. Staff Reporter Patty Harden discusses the event and the importance of the Coffee Hour series.',
      img: '/images/image.jpeg',
      link: 'https://udreview.com/spilling-the-culture-beans-a-look-into-international-coffee-hour/',
    },
    {
      title: 'Photo Gallery: International Coffee Hour',
      description:
        'Snapshots from the International Coffee Hour event, where students celebrated Diwali and engaged in cultural exchange organized by CGPS and IGSA.',
      img: '/images/image2.jpg', 
      link: 'https://udreview.com/photo-gallery-international-coffee-hour-4/',
    },
  ];

  return (
     <>
          <Navbar />
    <div style={{ padding: '100px 30px',
            backgroundColor: '#f6f3ed', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
      {newsData.map((news, index) => (
        <div

          key={index}
          style={{
            maxWidth: '600px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: 'white',
          }}
        >
          <img src={news.img} alt={news.title} style={{ width: '100%', height: 'auto' }} />
          <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>{news.title}</h2>
            <p style={{ fontSize: '14px', color: '#666' }}>{news.description}</p>
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '20px',
                color: '#F06000',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Read Full Article →
            </a>
          </div>
        </div>
      ))}
    </div>
      <Footer />
        </>
    
  );
}
