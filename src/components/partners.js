import React from 'react';
import './partners.css';
import Cesar from '../assets/Cesar.svg';
import Cristiano from '../assets/Cristiano.svg';
import Joao from '../assets/Joao.svg';
import Liana from '../assets/Liana.svg';
import Vinicius from '../assets/Vinicius.svg';

export class Partners extends React.Component {

  render() {
    return (
      <div className="partnerspage" id="partners">
        <div className="partners-text">
            <h3>Somados, somos +</h3>
        </div>
        <div className="partners-cards">
            <div className="parter-card">
              <img src={Cesar}/>
              <h4>Cesar Paz</h4>
              <p>Mentoring</p>
              <a href="https://www.linkedin.com/in/cesarpazdex/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="parter-card">
              <img src={Cristiano}/>
              <h4>Cristiano Fragoso</h4>
              <p>CCO</p>
              <a href="https://www.linkedin.com/in/cristiano-fragoso-06085631/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="parter-card">
              <img src={Joao}/>
              <h4>Joao Carapeto</h4>
              <p>COO</p>
              <a href="https://www.linkedin.com/in/carapeto/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>            
            </div>
            <div className="parter-card">
              <img src={Liana}/>
              <h4>Liana Bazanela</h4>
              <p>Chairwoman</p>
              <a href="https://www.linkedin.com/in/liana-bazanela-8b80a217/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="parter-card">
              <img src={Vinicius}/>
              <h4>Vinícius Ghise</h4>
              <p>CEO</p>
              <a href="https://www.linkedin.com/in/viniciusghise/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
      </div>
    );
  }
}

export default Partners;