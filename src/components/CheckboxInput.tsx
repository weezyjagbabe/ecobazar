import {InputHTMLAttributes} from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

function CheckboxInput({label, value, ...rest}: CheckboxProps) {
    const isChecked = value === 'on';

    return (<div className="flex items-center gap-2 max-w-fit">
        <input id={label} type="checkbox"
               checked={isChecked} {...rest} className="w-6 h-6"/>
        <label htmlFor={label} className="flex-shrink-0"> {label}</label>
    </div>)
}

export default CheckboxInput
