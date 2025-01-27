import { FunctionComponent } from "react";
import Input from "../../components/input";


const LoginPage: FunctionComponent = () => {
    return (
        <section className="flex flex-col items-center bg-zinc-100 sm:w-6/12 sm:h-[28rem] gap-5 rounded-lg drop-shadow-md">
            <div className="w-[90px] h-[90px] bg-purple-500 rounded-full mt-28"></div>
            <Input type="text" />
        </section>
    );
}

export default LoginPage;