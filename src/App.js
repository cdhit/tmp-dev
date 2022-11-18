import React from 'react'
import './styles.css'
import SectionsFactory from './sections/sections'

export default function App () {
  const section_list = ['door', 'wall']

  // the item_handler_generator
  const section_item_handler_generator = sid => {
    return function (iid) {
      console.log(`${sid} ${iid}`)

      // the detailed logic implemented here.
    }
  }

  // the select dropdown changed trigger this event hander.
  const section_key_change = (section_key, value) => {
    console.log(`${section_key} ${value}`)

    // the detailed logic implemented here.
  }

  return (
    <SectionsFactory
      section_list={section_list}
      section_handler={section_item_handler_generator}
      section_key_change={section_key_change}
    />
  )
}
