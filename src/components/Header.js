import PropTypes from "prop-types"
import { Link } from "react-router-dom";

/* import Button from "./Button" */

const Header = ({title}) => {
    return (
    
        <header>
            <h5>Tiene un costo monetario de</h5>
            <h1>{title}</h1>
            <nav>
                <Link to="/breakfast">
                    <button className="mainButton"> Desayuno </button>
                </Link>
                <Link to="/dailymenu">
                <button className="mainButton"> Menú Diario </button>
                </Link>
            {/* <Button text="Desayuno"/> */}
            {/* <Button text="Menú diario"/> */}
            </nav>
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