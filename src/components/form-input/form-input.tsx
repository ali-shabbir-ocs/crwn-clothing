import { FormInputLabel, Input, Group } from "./form-input.style.js";

import { FC, InputHTMLAttributes } from "react";

type FormInputType = {
  label: string;
  inputOptions: InputHTMLAttributes<HTMLInputElement>;
};

const FormInput: FC<FormInputType> = ({ label, inputOptions }) => {
  const hasValue =
    inputOptions.value &&
    typeof inputOptions.value === "string" &&
    inputOptions.value.length > 0;
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel shrink={hasValue ? true : false}>
          {label}
        </FormInputLabel>
        // <label
        //     className={`${inputOptions.value.length ?
        //         'shrink' : ''} form-input-label`}>{label}</label>
      )}
    </Group>
  );
};

export default FormInput;
