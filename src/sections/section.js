import { SectionItemsFactory } from './section_items'
import { sections_configs } from './section.config'

export function SectionFactory (props) {
  const { section_handler, section_id, section_key, section_key_change } = props

  const section_keys = Array.from(sections_configs.keys())
  const section_configs = sections_configs.get(section_key)

  return (
    <div className='section'>
      <select
        value={section_key}
        onChange={e => section_key_change(section_id, e.target.value)}
      >
        {section_keys.map((key, index) => (
          <option key={index}> {key} </option>
        ))}
      </select>
      <SectionItemsFactory
        configs={section_configs}
        section_id={section_id}
        section_handler={section_handler}
      />
    </div>
  )
}
