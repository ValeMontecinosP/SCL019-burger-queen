const Button = ({ text }) => {
    const click = () => {
        console.log(text);
        <h1>{text}</h1>
    }
    return <button onClick={click}>{text}</button>
}
export default Button