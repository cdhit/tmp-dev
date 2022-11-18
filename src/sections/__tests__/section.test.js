import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SectionFactory } from '../section'

Enzyme.configure({ adapter: new Adapter() })

describe('test section item', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('test SectionFactory', () => {
    const section_handler = () => {}
    let wrapper = shallow(
      <SectionFactory
        section_id={2}
        section_handler={section_handler}
        section_key='wall'
      />
    )
    expect(wrapper.html()).toEqual(
      '<div class="section"><select class="section-select"><option> door </option><option> wall </option></select><div class="section-items"><label>desc<input type="string" name="desc" id="0"/></label><label>height<input type="number" name="height" id="1"/></label><label>lintel-height<input type="number" name="lintel-height" id="2"/></label></div></div>'
    )
  })
})
