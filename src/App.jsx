import logo from "./assets/aascanadaLogo.png";
import InputForm from "./components/InputForm";
function App() {

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

export default App
