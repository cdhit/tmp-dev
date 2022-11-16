import React from "react";
import "./styles.css";
import SectionsFactory from "./sections/section_items_factory";

export default function App() {
  const sections_configs = ["door", "wall"];

  // the item_handler_generator
  const section_item_handler_generator = (sid) => {
    return function (iid) {
      console.log(`${sid} ${iid}`);

      // the detailed logic implemented here.
    };
  };

  // the select dropdown changed trigger this event hander.
  const section_key_change = (section_key, value) => {
    console.log(`${section_key} ${value}`);

    // the detailed logic implemented here.
  };

  const section_key_list = [];
  sections_configs.forEach((value, key) => {
    section_key_list.push(key);
  });

  return (
    <>
      {section_key_list.map((value, index) => {
        const section_id = index;
        const section_key = value;

        return (
          <SectionsFactory
            section_key={section_key}
            section_id={section_id}
            section_handler={section_item_handler_generator}
            section_key_change={section_key_change}
          />
        );
      })}
    </>
  );
}
