import React from 'react';
import './footer.css';
import Logofooter from '../assets/Logo-navbar.svg';


export class Footer extends React.Component {

  render() {
    return (
      <div className="footerpage">
        <div className="footer-container">
            <div className="footer-text">
                    <div className="footer-social">
                      <a href="https://www.linkedin.com/company/do-it-wfs/" rel="noreferrer" target="_blank"><i class="fab fa-linkedin-in"/></a>
                      <a href="https://www.instagram.com/doitbrandingtech/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"/></a>
                    </div>
                    <div className="footer-title">
                        <p>Copyright © 2021. DO IT + Todos os direitos reservados.</p>
                    </div>
                    <div className="footer-logo">
                      <img src={Logofooter} alt="Logofooter" title="Logofooter" loading="lazy"/>
                    </div>
            </div>
            <div className="footer-textmb">
              <div className="footer-socialmb">
                <a href="https://br.linkedin.com/company/globalad" rel="noreferrer" target="_blank"><i class="fab fa-linkedin-in"/></a>
                <a href="https://www.instagram.com/globalad/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"/></a>
              </div>
              <div className="footer-logomb">
                <img src={Logofooter} alt="Logofooter" title="Logofooter" loading="lazy"/>
              </div>
              <div className="footer-titlemb">
                  <p>Copyright © 2021. DO IT + Todos os direitos reservados.</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;