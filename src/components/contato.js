import React from 'react';
import './contato.css';
import Form from './Form';



export class Contato extends React.Component {

  render() {
    return (
      <div className="contatopage" id="contato">
        <div className="contato-container">
            <div className="contato-text">
                <div className="contato-wrapper1">
                    <div className="contato-title">
                        <h2>Vamos fazer coisas incríveis juntos.</h2>
                    </div>
                    <div className="contato-infos">
                        <div className="contato-infos-details">
                            <h3>Porto Alegre</h3>
                            <p>Av. Nilo Peçanha, 1500<br></br>Bairro Boa Vista<br></br>Unitec POA/Espaço Unisinos<br></br> CEP 91330-002</p>
                            <a href="tel: +55 51 3237 6773" rel="noreferrer">Telefone: <span> +55 51 3237 6773</span></a><br></br>
                            <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5551980536328&text=Olá,%20gostaria%20de%20conversar%20com%20a%20Global%20AD!" rel="noreferrer" target="_blank"> WhatsApp: <span> +55 51 98053 6328</span></a>
                        </div>
                        <div className="contato-infos-details">
                            <h3>São Paulo</h3>
                            <p>Rua Capitão Ântonio Rosa, 409<br></br> Bairro Jardim Paulista<br></br> CEP 01443-010</p>
                            <a href="tel: +55 11 2888 2381" rel="noreferrer">Telefone: <span> +55 11 2888 2381</span></a><br></br>
                            <span><br></br></span>
                            <h4>contato@doitplus.com.br</h4>
                        </div>
                    </div>
                </div>
                
                <div className="form">
                    <Form />
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Contato;