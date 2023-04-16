import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './listProductos.css'

export class ListProductos extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <form>
  <fieldset>
    <legend>Tamaño del zumo de fruta</legend>
    <p>
      <input type="text" />
      <label for="size_1">id</label>
    </p>
    <p>
      
      <label for="size_2">Mediano</label>
    </p>
    <p>
      
      <label for="size_3">Grande</label>
    </p>
  </fieldset>
</form>

       </div>
    )
  }
}

export default ListProductos