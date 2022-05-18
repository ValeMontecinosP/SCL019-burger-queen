import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


const Header = ({ title }) => {
    return (

        <Container className="header">

            {<img src="https://images.unsplash.com/photo-1621523133136-cea844f32bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" className="card-img-top" alt="sinco peso inicio"></img>
            }

            <h5 >Tiene un costo monetario de</h5>
            <h1><strong>{title}</strong></h1>
            <nav>
                <Link to="/breakfast">
                    <button className="mainButton"> Desayuno </button>
                </Link>
                <Link to="/dailymenu">
                    <button className="mainButton"> Menú Diario </button>
                </Link>
                <Link to="/kitchen">
                    <button className="mainButton"> Cocina </button>
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