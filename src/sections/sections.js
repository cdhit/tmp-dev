import { SectionFactory } from './section'
import './section.css'

export default function SectionsFactory (props) {
  const { section_list, section_handler, section_key_change } = props
  return (
    <>
      {section_list.map((section_key, section_id) => (
        <SectionFactory
          section_key={section_key}
          section_id={section_id}
          section_handler={section_handler}
          section_key_change={section_key_change}
        />
      ))}
    </>
  )
}
