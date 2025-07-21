import React from 'react';
import ProfileImage from './ProfileImage';
import Navbar from './Navbar';
import Footer from './Footer';
function NewTeam() {
  return (
    <>
      <Navbar />
   <div style={{ padding: '50px 20px', backgroundColor: '#f6f3ed' }}>
  <h2
    style={{
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: '32px',
      letterSpacing: '2px',
      marginBottom: '30px'
    }}
  >
  
  </h2>

   <div
  style={{
    backgroundColor: '#ffffff',
    padding: '40px',
    margin: '40px auto',
    maxWidth: '1200px',
    borderRadius: '16px',
   boxShadow: '0 4px 14px rgba(216, 139, 23, 0.601)',
  }}
>
  <h3 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>
    2025-2026 Committee
  </h3>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '40px',
      justifyItems: 'center'
    }}
  >
    {/* Member 1 */}
    <div style={{ textAlign: 'center' }}>
      <img
        src="/images/harkirat.jpeg"
        alt="Harkirat Kaur Mashiana"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h4 style={{ marginTop: '6px' }}>President</h4>
      <a href="mailto:harkirat@udel.edu" style={{ color: 'black', textDecoration: 'none' }}>Harkirat Kaur Mashiana</a>
    </div>

    {/* Member 2 */}
    <div style={{ textAlign: 'center' }}>
      <img
        src="/images/snehal.jpeg"
        alt="Snehal Satish Kalke"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h4 style={{ marginTop: '12px' }}>Vice President</h4>
      <a href="mailto:snehalk@udel.edu"style={{ color: 'black', textDecoration: 'none' }}>Snehal Satish Kalke</a>
    </div>

    {/* Member 3 */}
    <div style={{ textAlign: 'center' }}>
      <img
        src="/images/krishna.jpeg"
        alt="Krishna T"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h4 style={{ marginTop: '12px' }}>General Secretary</h4>
       <a href="mailto:tkrishna@udel.edu"style={{ color: 'black', textDecoration: 'none' }}>Krishna T</a>
    </div>

    {/* Member 4 */}
    <div style={{ textAlign: 'center' }}>
      <img
        src="/images/g.jpeg"
        alt="Gitansh Dandona"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h4 style={{ marginTop: '12px' }}>Treasurer</h4>
      <a href="mailto:gitdan@udel.edu"style={{ color: 'black', textDecoration: 'none' }}>Gitansh Dandona</a>
    </div>

    {/* Member 5 */}
    <div style={{ textAlign: 'center' }}>
      <img
        src="/images/akshita.jpeg"
        alt="Akshita Potdar"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h4 style={{ marginTop: '12px' }}>Website Manager</h4>
      <a href="mailto:akshitap@udel.edu"style={{ color: 'black', textDecoration: 'none' }}>Akshita R Potdar</a>
    </div>

    {/* Member 6 */}
    <div style={{ textAlign: 'center' }}>
      <img
        src="/images/srushti.jpeg"
        alt="Srushti Gandhe"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h4 style={{ marginTop: '12px' }}>Cultural Secretary</h4>
      <a href="mailto:srushti@udel.edu"style={{ color: 'black', textDecoration: 'none' }}>Srushti Gandhe</a>
    </div>

    {/* Member 7 */}
    <div style={{ textAlign: 'center' }}>
      <img
        src="/images/than.jpg"
        alt="Handuanlung Kamei"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h4 style={{ marginTop: '12px' }}>Student Advisor</h4>
      <a href="mailto:thanduan@udel.edu"style={{ color: 'black', textDecoration: 'none' }}>Handuanlung Kamei</a>
    </div>

    {/* Member 8 */}
    <div style={{ textAlign: 'center' }}>
      <img
        src="/images/tejas.jpg"
        alt="Tejas K"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h4 style={{ marginTop: '12px' }}>Student Advisor</h4>
      <a href="mailto:tejask@udel.edu"style={{ color: 'black', textDecoration: 'none' }}>Tejas Kshemkalyani</a>
    </div>
  </div>
</div>


      {/* Team 2024 */}
<details style={{ marginBottom: '15px' }}>
  <summary
    style={{
      
     backgroundColor: '#add8e6',
      padding: '12px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '16px',
      outline: 'none',
      boxShadow: 'inset 0 0 0 2px #005a9e'
    }}
  >
    IGSA Committee 2024 – Team ‘Unity’
  </summary>

  <div
    style={{
      border: '1px solid #ffcc80',
      borderRadius: '8px',
      padding: '20px 25px',
      marginTop: '15px',
      backgroundColor: '#fff',
      lineHeight: '1.6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}
  >
    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/than.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>THANDUANLUNG KAMEI</strong><br />
      President<br />
      📧 <a href="mailto:thanduan@udel.edu">thanduan@udel.edu</a><br />
      <em>I would like to reignite the love we all have towards brethren for our fellow countrymen in this foreign land so that through us others may also be encouraged.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/tejas.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>TEJAS KSHEMKALYANI</strong><br />
      Vice President<br />
      📧 <a href="mailto:tejask@udel.edu">tejask@udel.edu</a><br />
      <em>As VP, I steer the Graduate Association with a clear vision, ensuring every member feels valued. Through strategic planning and resourcefulness, I maximize our impact. Diversity and inclusion are my cornerstones, creating a supportive environment where everyone thrives.</em>
    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/charan.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>CHARAN</strong><br />
      General Secretary<br />
      📧 <a href="mailto:charnn@udel.edu">charnn@udel.edu</a><br />
      <em>IGSA has been a tool for me to network with a lot of students at the University of Delaware. In my time here in the USA, as I am trying to make this place feel like home away from home, I'll make sure people around me feel the same.</em>
    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/shiv.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>SHIV SINGLA</strong><br />
      Treasurer<br />
      📧 <a href="mailto:ssingla@udel.edu">ssingla@udel.edu</a><br />
      <em>As IGSA Treasurer, I will try my best that newcomers have a smooth transition, and I will answer their queries about life in Delaware. Our goal is to create a supportive and welcoming environment where every student feels valued.</em>
    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/pranay.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>PRANAYKUMAR TRIPUDE</strong><br />
      Cultural Secretary<br />
      📧 <a href="mailto:pranaykt@udel.edu">pranaykt@udel.edu</a><br />
      <em>As the Cultural Secretary of the IGSA, I'm committed to orchestrating engaging events that showcase our rich cultural tapestry. My goal is to strengthen bonds within our community and promote cross-cultural understanding. Together, we'll celebrate our heritage with pride and unity.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/rohan.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>ROHAN SWAIN</strong><br />
      Social Media Ambassador<br />
      📧 <a href="mailto:rohans@udel.edu">rohans@udel.edu</a><br />
      <em>I'm thrilled to serve as the Social Media Ambassador for IGSA. I look forward to connecting with you, sharing updates, and celebrating the vibrant traditions of India. Stay tuned for exciting events and cultural insights. Feel free to reach out — I'm here to engage and support our community!</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/rohit.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>ROHIT SURESH</strong><br />
      Website Manager<br />
      📧 <a href="mailto:rohits@udel.edu">rohits@udel.edu</a><br />
      <em>As the website manager for the IGSA, I'll make sure our website is easy to use and always filled with the latest news and events. I plan to keep things simple and fun, ensuring everyone can find what they need and stay connected with our community.</em>
    </p>
  </div></div></div>
</details>



      
   {/* Team 2023 */}
<details style={{ marginBottom: '15px' }}>
  <summary
    style={{
      backgroundColor: '#add8e6',
      padding: '12px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '16px',
      outline: 'none',
      boxShadow: 'inset 0 0 0 2px #005a9e'
    }}
  >
     IGSA Committee 2023 – Team ‘Jashn’
  </summary>

  <div
    style={{
      border: '1px solid #add8e6',
      borderRadius: '8px',
      padding: '20px 25px',
      marginTop: '15px',
      backgroundColor: '#fff',
      lineHeight: '1.6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}
  >
    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/aditi.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>ADITI SHAMBHARKAR</strong><br />
      President<br />
      📚 Masters, Chemical and Biomolecular Engineering<br />
      📧 <a href="mailto:aditiuvs@udel.edu">aditiuvs@udel.edu</a><br />
      <em>My vision for IGSA is a simple yet powerful one: to bring all international students together, regardless of which part of the world they are from, in a fun, engaging, and intellectually stimulating environment. As President, my top priority will be to create an inclusive space where all students can experience the joy of sharing and learning from one another, embrace our diversity, and celebrate our differences together.</em>
    </p>
</div></div>

 <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/ooha.jpeg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>OOHA IMANDI</strong><br />
      Vice President<br />
      📚 Masters, Business Analytics & Information Management<br />
      📧 <a href="mailto:oimandi@udel.edu">oimandi@udel.edu</a><br />
      <em>As Vice President, my goal is to ensure that every member of the organization is heard and their opinions are taken into consideration. Ultimately, I aim to build a stronger and more united community that celebrates and embraces our differences and shared values.</em>
    </p></div></div>

 <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/keshav.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>KESHAV KISHOR</strong><br />
      General Secretary<br />
      📚 PhD, Plant and Soil Sciences<br />
      📧 <a href="mailto:kkishor@udel.edu">kkishor@udel.edu</a><br />
      <em>IGSA has been more than home to me and many graduate students here at University of Delaware. My main objective for joining IGSA is to preserve the essence of desiness at UD, still being thousand miles away from our beloved homeland.</em>
    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/shivam.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>SHIVAM BARODIYA</strong><br />
      Treasurer<br />
      📚 PhD, Chemical and Biomolecular Engineering<br />
      📧 <a href="mailto:shivamb@udel.edu">shivamb@udel.edu</a><br />
      <em>I like dealing with finance and numbers. As the treasurer of IGSA, I would focus on finding sponsors for having higher event budgets, making budgets for the festival celebrations, assisting the team in smoothly onboarding incoming students and conducting the events, and building a strong and diverse community.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/yash.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>YASH KABRA</strong><br />
      Cultural Secretary<br />
      📚 Masters, Electrical and Computer Engineering<br />
      📧 <a href="mailto:ykabra@udel.edu">ykabra@udel.edu</a><br />
      <em>Representing the Indian community and helping in its diversification is a good enough motive for me to join, being a proud Indian! Looking at how good the previous team was, it would be difficult to keep up with the standards. But I do have enough confidence to help and provide people with a sense of belongingness by setting up different events and meet-ups.</em>
    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/mahadev.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>MAHADEV MAITRI</strong><br />
      Website Manager<br />
      📚 Masters, Computer and Information Sciences<br />
      📧 <a href="mailto:mmaitri@udel.edu">mmaitri@udel.edu</a><br />
      <em>As someone who understands the importance of finding affordable and comfortable housing and navigating transportation options in a new city, I am thrilled at the opportunity to serve as the Website Manager for IGSA. It is my hope that I can use this platform to help incoming international students feel more at home and ease their transition into campus life.</em>
    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/smriti.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>SMRITI SINGH</strong><br />
      Social Media Ambassador<br />
      📚 Masters, Cybersecurity
      📧 <a href="mailto:smritis@udel.edu">smritis@udel.edu</a><br />
      <em>With my love for creativity and communication, I aim to curate captivating content that reflects the unique spirit and values for IGSA.
I strive to amplify diverse voices, celebrate achievements, and create opportunities for meaningful engagement among our international students.</em>

    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/charanpreet.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>CHARANPREET KAUR</strong><br />
      Student Advisor<br />
      📚 PhD, Plant and Soil Sciences<br />
      📧 <a href="mailto:ckdhiman@udel.edu">ckdhiman@udel.edu</a>
    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/bhavika.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>BHAVIKA MANI</strong><br />
      Student Advisor<br />
      📚 PhD, Electrical and Computer Engineering<br />
      📧 <a href="mailto:bhavika@udel.edu">bhavika@udel.edu</a>
    </p>
  </div></div></div>
</details>


   
{/* Team 2022 */}


<details style={{ marginBottom: '15px' }}>
  <summary
    style={{
   backgroundColor: '#add8e6',
      padding: '12px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '16px',
      outline: 'none',
      boxShadow: 'inset 0 0 0 2px #005a9e'
    }}
  >
     IGSA Committee 2022 – Team ‘Grad-itude’
  </summary>

  <div
    style={{
      border: '1px solid #00d084',
      borderRadius: '8px',
      padding: '20px 25px',
      marginTop: '15px',
      backgroundColor: '#fff',
      lineHeight: '1.6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}
  >

    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/yagya.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>YAGYA GUPTA</strong><br />
      President<br />
      📚 PhD, Chemical and Biomolecular Engineering<br />
      📧 <a href="mailto:yagya@udel.edu">yagya@udel.edu</a><br />
      <em>I believe, a life lived without passion is a life wasted. My mantra is to live every moment to the fullest and I try everyday. Helping people provides me self satisfaction which is why I decided to be a part of IGSA committee. I am easy to talk to and I’d welcome any suggestions, ideas for events or a new outlook for IGSA from anyone and everyone. Also, I love to paint, write and read when I am not stressing about my research.</em>
    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/manan.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>MANAN SARUPRIA</strong><br />
      Vice President<br />
      📚 PhD, Geography and Spatial Science<br />
      📧 <a href="mailto:manansar@udel.edu">manansar@udel.edu</a><br />
      <em>YOUR story sets YOU free. My story so far has been full of moments where I have lived them passionately. Here at IGSA, I plan to bring to you many social events, ears to listen when you need one, support to help you navigate through grad school and many such opportunities where you can live a bit more of that extra life to know for yourself, "how your story sets you free."</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/archis.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>ARCHIS AMRITE</strong><br />
      General Secretary<br />
      📚 Masters, Mechanical Engineering<br />
      📧 <a href="mailto:archis@udel.edu">archis@udel.edu</a><br />
      <em>I am always on the lookout for new experiences. I breathe sports – and to me, the team always comes first. Happy is my middle name, and there is nothing that brings me more joy than spreading happiness. Five words that I live by – good food makes good memories!</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/bhavika.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>BHAVIKA MANI</strong><br />
      Treasurer<br />
      📚 PhD, Electrical and Computer Engineering<br />
      📧 <a href="mailto:bhavika@udel.edu">bhavika@udel.edu</a><br />
      <em>I always look for something interesting and explore my passion for going through something innovative and challenging, as PhD is just not a regular pattern or degree of academic achievements for me, it's beyond that, more like passion. Likewise, I'm willing to take up challenges and try to shape them in a solution whether academic or others. When I am not working, you can find me as a chef, dancing lady, singing, listening to music and exploring more ways.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/vikas.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>VIKAS SHUKLA</strong><br />
      Cultural Secretary<br />
      📚 PhD, Electrical and Computer Engineering<br />
      📧 <a href="mailto:vikas@udel.edu">vikas@udel.edu</a><br />
      <em>Always looking for opportunities to learn new skills, be it social or technical. I love poetries and reading Hindi literature. I like to play outdoor games. I meditate and try to be engaged with physical activities. I believe in synergy, as a team we can achieve highest level of goals.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/charanpreet.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>CHARANPREET KAUR</strong><br />
      Social Ambassador<br />
      📚 PhD, Plant and Soil Sciences<br />
      📧 <a href="mailto:ckdhiman@udel.edu">ckdhiman@udel.edu</a><br />
      <em>I am an empathetic and compassionate person who is always up for trying new activities, meeting new people, and expanding horizons. You will find me friendly, easily approachable and always willing to assist.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/khushboo.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>KHUSHBOO VERMA</strong><br />
      Student Advisor<br />
      📚 PhD, Physical Therapy<br />
      📧 <a href="mailto:vkhush@udel.edu">vkhush@udel.edu</a>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/dileep.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>DILEEP NIMMA</strong><br />
      Student Advisor<br />
      📚 Masters, Computer and Information Sciences<br />
      📧 <a href="mailto:dileep@udel.edu">dileep@udel.edu</a>
    </p>
  </div></div></div>
</details>



     
    
{/* Team 2021 */}
<details style={{ marginBottom: '15px' }}>
  <summary
    style={{
    backgroundColor: '#add8e6',
      padding: '12px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '16px',
      outline: 'none',
      boxShadow: 'inset 0 0 0 2px #005a9e'
    }}
  >
    IGSA Committee 2021 – Team ‘The New Normal’
  </summary>

  <div
    style={{
      border: '1px solid #f08080',
      borderRadius: '8px',
      padding: '20px 25px',
      marginTop: '15px',
      backgroundColor: '#fff',
      lineHeight: '1.6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}
  >

    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/rucha.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>RUCHA RAILKAR</strong><br />
      President, Cultural Secretary<br />
      📚 PhD, Chemical and Biomolecular Engineering<br />
      📧 <a href="mailto:ruchasr@udel.edu">ruchasr@udel.edu</a><br />
      <em>I am an Indian. My country, we – its nationals and everyone related to us form the community that I am here to serve, protect and grow. A social enthusiast that I am, I wish to make our lives as young adults, colourful and rich, just like our Indian culture.</em>
    </p></div></div>


<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/suchi.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>SHUCHI SANGHVI</strong><br />
      Vice President<br />
      📚 Masters, International Business<br />
      📧 <a href="mailto:shuchiks@udel.edu">shuchiks@udel.edu</a><br />
      <em>I am here to meet new people, communicate with them, work as a team.
I love taking long walks, listening to music and sometimes sing too, a tyro (beginner) guitarist.
Spread love not hate.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/charanpreet.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>CHARANPREET KAUR</strong><br />
      General Secretary<br />
      📚 PhD, Plant and Soil Sciences<br />
      📧 <a href="mailto:ckdhiman@udel.edu">ckdhiman@udel.edu</a><br />
      <em>I am an empathetic and compassionate person who is always up for trying new activities, meeting new people, and expanding horizons.
You will find me friendly, easily approachable and always willing to assist.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/haritha.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>HARITHA VARKALA</strong><br />
      Co-Treasurer<br />
      📚 Masters, Computer and Information Sciences<br />
      📧 <a href="mailto:haritha@udel.edu">haritha@udel.edu</a><br />
      <em>I’m an optimist, calm and a friendly person.
I enjoy connecting to new people.
Finding happiness in whatever we do is what I follow.
Can’t wait to be a part of IGSA and serve the team in the best way I can!</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/dileep.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>DILEEP NIMMA</strong><br />
      Co-Treasurer<br />
      📚 Masters, Computer and Information Sciences<br />
      📧 <a href="mailto:dileep@udel.edu">dileep@udel.edu</a><br />
      <em>I am not a blusterous person, neither do I seek to impress anyone. I always look for ways to develop my skills and learn new things not just in school but outside the school environment.
I love challenges, as they are my motivation.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/akanksha.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>AKANKSHA KAPADIA</strong><br />
      Social Ambassador, Cultural Secretary<br />
      📚 MBA, Business Analytics<br />
      📧 <a href="mailto:akapadia@udel.edu">akapadia@udel.edu</a><br />
      <em>I believe in the saying "where there's a will, there's a way".
Nothing can stop me when I'm determined. I'm an ambivert who's has a very practical outlook to life and there's no room for judgement here :)
Also, I love to paint, go on hikes and try out new food joints.
I hope to show y'all the Indian culture and values through IGSA.</em>
    </p></div></div>

<div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '30px' }}>
  <ProfileImage src="/images/khushboo.jpg" alt="Harkirat Kaur Mashiana" shape="shape" />
  <div>
    <p><strong>KHUSHBOO VERMA</strong><br />
      Student Advisor<br />
      📚 PhD, Physical Therapy<br />
      📧 <a href="mailto:vkhush@udel.edu">vkhush@udel.edu</a>
    </p></div></div>

    <p><strong>ABHISHEK IYER</strong><br />
      Student Advisor<br />
      📚 PhD, Electrical and Computer Engineering<br />
      📧 <a href="mailto:jeetshek@udel.edu">jeetshek@udel.edu</a>
    </p>
  </div> 
</details>
</div>

  <Footer />
    </>

  );
}

export default NewTeam;
