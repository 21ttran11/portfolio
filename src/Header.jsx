import React from 'react';

const Header = () => (
<header className="header">
  <div className="header-container">
    <div className="header-text">
      <p>
      <span style={{ fontSize: '37px' }}>Tiffany Tran</span> is a <span style={{ fontWeight: '450' }} className="yellow">game programmer</span> passionate about creativity and <span className="blue">leadership</span>. 
        Currently studying computer science at California State University of Fullerton, she is dedicated to <span className="red">fostering community</span> and <span className="green">connecting players</span> through developing and enhancing immersive gameplay. 
      </p>
      <a href="more.html" className="more">more</a>
    </div>
  </div>
</header>
);

export default Header;
