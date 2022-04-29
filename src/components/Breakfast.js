import Button from "./Button"
import breakfast from "../breakfast.json"

const Breakfast = () => {
    return (
        <>
            {breakfast.map((brekkie) => (
                <Button text={`${brekkie.text} $${brekkie.value}`} />
            )
            )}

        </>

    )
}
export default Breakfast

//onClick as a prop