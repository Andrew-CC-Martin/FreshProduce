import React from 'react'
import './CatalogueTitle.css'

class CatalogueTitle extends React.Component {
  render () {
    return (
      <div className="product-title">
        <h2>
          {this.props.title}
        </h2>
      </div>
    )
  }
}

export default CatalogueTitle