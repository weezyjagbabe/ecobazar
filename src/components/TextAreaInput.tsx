import {TextareaHTMLAttributes} from "react";

interface TextAreaInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
}

function TextAreaInput({label, ...rest}: TextAreaInputProps) {
    return (
        <div className="flex flex-col items-start gap-1">
            <label htmlFor={label}> {label}</label>
            <textarea id={label} rows={6} {...rest} className="input"/>
        </div>
    )
}

export default TextAreaInput;