import React, { useState, useEffect } from 'react'
import './styles.css'
import SectionsFactory from './sections/sections'

export default function App () {
  const section_list = ['door', 'wall']

  const [iid, setIid] = useState(0)
  const [sid, setSid] = useState(0)
  const [section_key, setSectionKey] = useState(0)
  const [value, setValue] = useState('')
  const [itemValue, setItemValue] = useState('')

  // the item_handler_generator
  const section_item_handler_generator = sid => {
    return function (iid, value) {
      setIid(iid)
      setSid(sid)
      setItemValue(value)
      // the detailed logic implemented here.
    }
  }

  useEffect(() => {
    console.log(`${sid} ${iid} ${itemValue}`)
    console.log(`${section_key} ${value}`)
  }, [iid, sid, section_key, value, itemValue])

  // the select dropdown changed trigger this event hander.
  const section_key_change = (section_key, value) => {
    setSectionKey(section_key)
    setValue(value)
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
