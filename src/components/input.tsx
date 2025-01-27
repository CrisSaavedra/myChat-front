import { FunctionComponent } from "react";


interface InputProps {
    type: string
    value?: string
    placeholder?: string
    width?: string
    height?: string
    textWidth?: string
}
//por alguna razon no el css no toma los valore que no vengan default

const Input: FunctionComponent<InputProps> = (props: InputProps) => {


    const { type, value, placeholder, textWidth = '2xl' } = props;

    return (
        <input className={"p-1 rounded-lg w-[${width}] text-" + textWidth } type={type} value={value} placeholder={placeholder} /> 
    );
}

export default Input;