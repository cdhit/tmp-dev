import { SectionItemFactory } from './section_item'

export function SectionItemsFactory (props) {
  const { configs, section_id, section_handler } = props
  const item_handler = section_handler(section_id)
  return (
    <>
      {configs.map(({ itype, label }, index) => (
        <SectionItemFactory
          itype={itype}
          label={label}
          key={index}
          item_id={index}
          item_handler={item_handler}
        />
      ))}
    </>
  )
}
