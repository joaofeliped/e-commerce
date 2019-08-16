import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const response = await api.get('/products') ;

    this.setState({
      products: response.data,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        <li>
          <img src={"https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg?resize=326:*"} alt="tênis"/>

          <strong>Tênis muito legal</strong>
          <span>R$129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
