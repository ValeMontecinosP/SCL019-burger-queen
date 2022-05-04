import Button from "./Button"
import dailymenu from "../dailymenu.json"
import { Link } from "react-router-dom";

const DailyMenu = () => {
    return (
        <>
            <Link to="/">
                <button className="mainButton"> Volver a Home </button>
            </Link>
            {dailymenu.map((menu) => (
                <Button key={menu.id} text={`${menu.text} $${menu.value}`} />
            )
            )}

        </>

    )
}
export default DailyMenu

//onClick as a prop