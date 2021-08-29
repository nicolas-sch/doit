import React from 'react';
import './about.css';
import YouTubePlayer from 'react-player/youtube';


export class About extends React.Component {

  render() {
    return (
      <div className="aboutpage" id="about">
        <div className="about-text">
            <h1>Agora somos brandingtech</h1>
            <p>
              Somos aceleradora de marcas mais agência digital.<br></br>
              Somamos inteligência e emoção, tecnologia e criatividade, branding e performance. Tudo isso gerando mais resultados para startups, scale ups e negócios da nova economia através de projetos de comunicação e design.                  </p>
        </div>
        <div className="player-wrapper">
          <YouTubePlayer
            url='https://www.youtube.com/watch?v=53fqRuRI0qI'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    );
  }
}

export default About;