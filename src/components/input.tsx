import { FunctionComponent } from "react";

class InputProps {
    type: string = 'text';
    value?: string = 'text';
    placeholder?: string ='text';
    className?: string = 'text';
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    return (
        <input className="p-1" type={props.type} placeholder={props.placeholder} />
    );
}

export default Input;