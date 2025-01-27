import { FunctionComponent } from "react";


interface InputProps {
    type: string 
    value?: string
    placeholder?: string 
    width?: string 
    height?: string
    textWidth?: string 
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const { type, value, placeholder, width, height = '50rem', textWidth } = props;

    return (
        <input className={`p-1 rounded-lg w-[${width || '10%'}] text-[${textWidth || 'lg'}] h-[${height}]`} type={type} value={value} placeholder={placeholder} />
    );
}

export default Input;