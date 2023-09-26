import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

function InputField({label, type, ...rest}: InputProps) {
    if (type === 'checkbox') {
        return (<div className="flex items-center gap-2 max-w-fit">
            <input id={label} {...rest} type={type} className="w-6 h-6"/>
            <label htmlFor={label} className="flex-shrink-0"> {label}</label>
        </div>)
    }

    return (
        <div className="flex flex-col items-start gap-1">
            <label htmlFor={label}> {label}</label>
            <input id={label} {...rest} type={type} className="input"/>
        </div>
    )
}

export default InputField