import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SectionItemFactory } from '../section_item'

Enzyme.configure({ adapter: new Adapter() })

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
    function item_handler (item_id, value) {
      throw `Parameter ${item_id} ${value}`
    }
    let wrapper = shallow(
      <SectionItemFactory
        itype='string'
        label='desc'
        id={1}
        item_handler={item_handler}
      />
    )
    expect(
      wrapper.find('input').prop('onChange')({ target: { value: 123 } })
    ).toThrow('Parameter undefined 123')
  })
})
