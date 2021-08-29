import React from 'react';
import './header.css';
import Video from '../assets/DOIT+_DESK.mp4'
import VideoMobile from '../assets/DOIT+_MOBILE.mp4';

export class Header extends React.Component {

  render() {
    return (
      <div>
        <header id="header">
            <div className="header-video">
              <video autoPlay muted loop>
                <source src={Video} type="video/mp4"/>
              </video>
            </div>
            <div className="header-video-mobile">
              <video autoPlay muted loop>
                <source src={VideoMobile} type="video/mp4"/>
              </video>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;
