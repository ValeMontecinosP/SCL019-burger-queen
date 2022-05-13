import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


/* import Button from "./Button" */

const Header = ({ title }) => {
    return (

        <Container className="header">


            <h5>Tiene un costo monetario de</h5>
            <h1><strong>{title}</strong></h1>
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

        </Container>

    )
}
Header.defaultProps = {
    title: "Sinco peso",
}
Header.propTypes = {
    title: PropTypes.string,
}

export default Header