import {SelectHTMLAttributes} from "react";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    options: {
        key: string,
        value: string
    }[]
}

function SelectInput({label, options, ...rest}: SelectInputProps) {
    return (
        <div className="flex flex-col items-start gap-1">
            <label htmlFor={label}> {label}</label>
            <select {...rest} className="input">
                <option className="text-sm text-gray-200"> select an option</option>
                {options.map((option, i) => (
                    <option value={option.value} key={i}> {option.key}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput