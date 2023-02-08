import InputForm from "./InputForm"
import logo from "../assets/aascanadaLogo.png"
export default function Home() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </header>
            <p className="question">What day is best for you</p>
            <InputForm />

            <div className="wave"></div>
        </>
    )
}