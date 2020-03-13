import React, {Component} from 'react';
import api from "../../services/api";

import './styles.css';

export default class Main extends Component{
    state = {
        nome:[],
    }
    componentDidMount(){
        this.loadProducts();
    }
    
    loadProducts = async () => {
        const response = await api.get('/casas');

        this.setState({nome:response.data});
    };

    render(){
        return (
        
            <div className="nome-list">
                {this.state.nome.map(nome => (
                   <article key={nome._codigo}>
                       <strong>{nome.nome}</strong>
                       <p>{nome.endereco}</p>
                       <a href='https://casashow-api.herokuapp.com/${nome.codigo}'>Acessar</a>
                   </article>
                ))}

            </div>
           // <h1>Hello Amarelao: {this.state.nome.length}</h1>
        
        );
    }
}