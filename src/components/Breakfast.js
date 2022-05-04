import Button from "./Button"
import breakfast from "../breakfast.json"
import { Link } from "react-router-dom";

const Breakfast = () => {

    return (
        <>
          
            <Link to="/">
                <button className="mainButton"> Volver a Home </button>
            </Link>
            {breakfast.map((brekkie) => (
                <Button key={brekkie.id} text={`${brekkie.text} $${brekkie.value}`} />
            )
            )}

        </>

    )
}
export default Breakfast

//onClick as a prop