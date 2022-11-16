import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SectionItemFactory } from '../section_items_factory'
import { SectionItemsFactory } from '../section_items_factory'
import { SectionFactory } from '../section_items_factory'

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
      '<select><option> door </option><option> wall </option></select><label>desc<input type="string" name="desc" id="0"/></label><label>height<input type="number" name="height" id="1"/></label><label>lintel-height<input type="number" name="lintel-height" id="2"/></label>'
    )
  })

  it('test parse sections config', () => {
    const sections_configs = new Map(
      Object.entries({
        door: [
          {
            itype: 'string',
            label: 'desc'
          },
          {
            itype: 'number',
            label: 'height'
          },
          {
            itype: 'number',
            label: 'lintel-height'
          }
        ],
        wall: [
          {
            itype: 'string',
            label: 'desc'
          },
          {
            itype: 'number',
            label: 'height'
          },
          {
            itype: 'number',
            label: 'wall-height'
          }
        ]
      })
    )
    const section_keys = Array.from(sections_configs.keys())
    expect(section_keys).toEqual(['door', 'wall'])

    const section_configs = []
    const section_key_list = []
    sections_configs.forEach((value, key) => {
      section_configs.push(value)
      section_key_list.push(key)
    })

    expect(section_key_list).toEqual(['door', 'wall'])
    section_key_list.map((value, index) => {
      const section_id = index
      const section_key = value
      const section_configs = sections_configs.get(section_key)

      console.log(section_id)
      console.log(section_key)
      console.log(section_configs)

      if (section_id === 0) {
        expect(section_key).toBe('door')
        expect(section_configs).toEqual([
          {
            itype: 'string',
            label: 'desc'
          },
          {
            itype: 'number',
            label: 'height'
          },
          {
            itype: 'number',
            label: 'lintel-height'
          }
        ])
      } else if (index === 1) {
        expect(section_key).toBe('wall')
        expect(section_configs).toEqual([
          {
            itype: 'string',
            label: 'desc'
          },
          {
            itype: 'number',
            label: 'height'
          },
          {
            itype: 'number',
            label: 'wall-height'
          }
        ])
      }
      return 0
    })
  })
})
