import React from 'react'

export function SectionItemFactory (props) {
  const { itype, label, item_id, item_handler } = props
  return (
    <label>
      {label}
      <input
        type={itype}
        name={label}
        id={item_id}
        onChange={e => item_handler(item_id, e.target.value)}
      ></input>
    </label>
  )
}
