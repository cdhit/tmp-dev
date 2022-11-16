import React from "react";

export function SectionItemFactory(props) {
  const { itype, label, item_id, item_handler } = props;
  return (
    <label>
      {label}
      <input
        type={itype}
        name={label}
        id={item_id}
        onChange={() => item_handler(item_id)}
      ></input>
    </label>
  );
}

export function SectionItemsFactory(props) {
  const { configs, section_id, section_handler } = props;
  const item_handler = section_handler(section_id);
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
  );
}

export function SectionFactory(props) {
  const {
    section_handler,
    section_id,
    section_configs,
    section_keys,
    section_key,
    section_key_change
  } = props;

  return (
    <>
      <select
        value={section_key}
        onChange={(e) => section_key_change(section_id, e.target.value)}
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
    </>
  );
}

export default function SectionsFactory(props) {
  const sections_configs = new Map(
    Object.entries({
      door: [
        {
          itype: "string",
          label: "desc"
        },
        {
          itype: "number",
          label: "height"
        },
        {
          itype: "number",
          label: "lintel-height"
        }
      ],
      wall: [
        {
          itype: "string",
          label: "desc"
        },
        {
          itype: "number",
          label: "height"
        },
        {
          itype: "number",
          label: "lintel-height"
        }
      ]
    })
  );

  const {
    section_handler,
    section_id,
    section_key,
    section_key_change
  } = props;

  const section_keys = Array.from(sections_configs.keys());
  const section_configs = sections_configs.get(section_key);
  console.log(section_configs);

  return (
    <SectionFactory
      section_keys={section_keys}
      section_key={section_key}
      section_configs={section_configs}
      section_id={section_id}
      section_handler={section_handler}
      section_key_change={section_key_change}
    />
  );
}
