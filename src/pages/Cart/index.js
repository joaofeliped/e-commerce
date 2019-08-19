import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { connect } from 'react-redux';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart }) {
  return (
   <Container>
     <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
            {cart.map(product => (
              <tr>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.price}</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={16} color="#7159c1"/>
                    </button>

                    <input type="number" readOnly value={2}/>

                    <button type="button">
                      <MdAddCircleOutline size={16} color="#7159c1"/>
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.price}</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete size={20} color="#7159c1"/>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
     </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}


export default connect(state => ({ cart: state.cart }))(Cart);
