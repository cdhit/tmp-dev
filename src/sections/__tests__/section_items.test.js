import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SectionItemsFactory } from '../section_items'

Enzyme.configure({ adapter: new Adapter() })

describe('test section item', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('test SectionItemsFactory', () => {
    const section_handler = () => {}
    let wrapper = shallow(
      <SectionItemsFactory
        configs={[
          {
            itype: 'string',
            label: 'desc'
          },
          {
            itype: 'number',
            label: 'height'
          }
        ]}
        section_id={2}
        section_handler={section_handler}
      />
    )
    expect(wrapper.html()).toEqual(
      '<label>desc<input type="string" name="desc" id="0"/></label><label>height<input type="number" name="height" id="1"/></label>'
    )
  })
})
