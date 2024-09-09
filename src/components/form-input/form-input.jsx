
import { FormInputLabel, Input, Group } from './form-input.style.jsx';
const FormInput = ({ label, inputOptions }) => {
    return (
        <Group>
            <Input {...inputOptions} />
            {label && (
                <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>
                // <label
                //     className={`${inputOptions.value.length ?
                //         'shrink' : ''} form-input-label`}>{label}</label>
            )}
        </Group>
    )
}

export default FormInput;