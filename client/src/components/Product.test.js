import Product from './Product.js'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

test('Product component should be selectable by image class', () => {
  const product = {
    name: "elephant",
    img_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpLKLq9HB-kPhorbNpdMQGkvTx_KxlcVh5UHbwAMgz5K7Y4ql-A",
    uom: "kg",
    unit_sell_price: 4.5
  }

  const wrapper = Enzyme.shallow(

    <Product imgUrl={product.img_path} />

  )

  const p = wrapper.find(".product-picture").exists()

  expect(p).toBe(true)
})

test('Product component should render product description', () => {
  const product = {
    name: "elephant",
    img_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpLKLq9HB-kPhorbNpdMQGkvTx_KxlcVh5UHbwAMgz5K7Y4ql-A",
    uom: "kg",
    unit_sell_price: 4.5
  }

  const wrapper = Enzyme.shallow(

    <Product key={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} />

  )

  const p = wrapper.find(".product")

  expect(p.text()).toBe('elephant' + 'Price: $4.5/kg')

})