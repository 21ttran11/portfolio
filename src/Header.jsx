import React from 'react';
import Picture from '/Users/tiffanytran/Documents/GitHub/portfolio/src/assets/picture.jpg';

const Header = () => (
<header className="header">
  <div className="header-container">
    <img 
      src={Picture}
      alt="Tiffany's Picture"
      className="header-img"
    />
    <div className="header-text">
      <h1>Tiffany Tran ⁺˚⋆🖥️⁺˚🎮°✩₊</h1>
      <p>
        Hi, I'm a <b>game programmer</b> and currently a student at California State University of Fullerton. 
        Here are some of the projects I've worked on!
      </p>
    </div>
  </div>
</header>
);

export default Header;
