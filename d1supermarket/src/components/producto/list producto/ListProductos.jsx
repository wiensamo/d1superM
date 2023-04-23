import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './listProductos.css'

export class ListProductos extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <table class="lista_producto">
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <td>001</td>
            <td>Manzana</td>
            <td>Comida</td>
            <td>
              <button>lapiz</button>
              <button>caneca</button>
            </td>
          </tr>
        </table>        
      </div>
    )
  }
}

export default ListProductos