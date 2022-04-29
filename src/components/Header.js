import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({title}) => {
    return (
        <header>
            <h5>Tiene un costo monetario de</h5>
            <h1>{title}</h1>
            <Button text="Desayuno"/>
            <Button text="Menú diario"/>
        </header>
    )
}
Header.defaultProps = {
    title: "Sinco peso",
}
Header.propTypes = {
    title: PropTypes.string,
}

export default Header