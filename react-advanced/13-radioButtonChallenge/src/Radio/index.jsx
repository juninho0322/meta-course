import * as React from "react";
import "./style.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const { value } = child.props; // assume each RadioOption has a 'value' prop

    return React.cloneElement(child, {
      onChange,                     // pass group onChange down
      selected: value === selected, // mark this option as selected
      checked: value === selected,  // (optional) also expose as 'checked'
      role: "radio",
      "aria-checked": value === selected,
      tabIndex: value === selected ? 0 : -1,
    });
  });

  return (
    <div className="RadioGroup" role="radiogroup">
      {RadioOptions}
    </div>
  );
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name="radio-group" // should be same for all options in a group
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)} // notify RadioGroup
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
