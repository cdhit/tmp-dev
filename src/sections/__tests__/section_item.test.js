import React, { useState } from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SectionItemFactory } from '../section_item'

Enzyme.configure({ adapter: new Adapter() })
// console.error
// Warning: An update to TestItemFactory inside a test was not wrapped in act(...).

// When testing, code that causes React state updates should be wrapped into act(...):

// act(() => {
//   /* fire events that update state */
// });
// /* assert on the output */

// This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
//     in TestItemFactory (created by WrapperComponent)
//     in WrapperComponent
describe('test section item', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('test SectionItemFactory', () => {
    let wrapper = shallow(<SectionItemFactory itype='string' label='desc' />)
    expect(wrapper.html()).toEqual(
      '<label>desc<input type="string" name="desc"/></label>'
    )
  })

  it('test SectionItemFactory event', () => {
    function TestItemFactory (props) {
      const [state, setState] = useState(0)
      const [value, setvalue] = useState(0)
      function onChange (item_id, value) {
        setState(item_id)
        setvalue(value)
      }

      return (
        <>
          <SectionItemFactory
            itype='string'
            label='desc'
            item_id={3}
            item_handler={onChange}
          />
          {state}
          {value}
        </>
      )
    }

    let wrapper = mount(<TestItemFactory />)
    wrapper.find('input').prop('onChange')({ target: { value: 123 } })
    wrapper.update()
    expect(wrapper.html()).toEqual(
      '<label>desc<input type="string" name="desc" id="3"></label>3123'
    )
  })
})
