import Button from "./Button"
import dailymenu from "../dailymenu.json"

const DailyMenu = () => {
    return (
        <>
            {dailymenu.map((menu) => (
                <Button key={menu.id} text={`${menu.text} $${menu.value}`} />
            )
            )}

        </>

    )
}
export default DailyMenu

//onClick as a prop