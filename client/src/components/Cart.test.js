import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

test('Cart contents should persist between sessions', () => {

  // const cart = localStorage.cart

  // expect(cart).toBe(true)
})

test('Cart item should be deleted from localStorage when delete item is clicked', () => {

})

test('Cart should not render negative quantities', () => {

})