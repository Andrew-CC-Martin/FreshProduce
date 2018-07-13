import React from 'react'

class CatalogueTitle extends React.Component {
  render () {
    return (
      <div className="product-title">
        {this.props.title}
      </div>
    )
  }
}

export default CatalogueTitle