import { SelectField } from "payload/types";

function enableField(fieldOverrides?: Partial<SelectField>): SelectField {
  return {
    label: "Enable",
    name: "enable",
    type: "select",
    options: ["Yes", "No"],
    defaultValue: "Yes",
    required: true,
    ...fieldOverrides,
  };
}

export default enableField;
