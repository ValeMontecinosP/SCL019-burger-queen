const breakfast = [
    {
        id: 1,
        text: "Café americano $5",
    },
    {
        id: 2,
        text: "Café con leche $7",
    },
    {
        id: 3,
        text: "Sándwich de jamón y queso $10",
    },
    {
        id: 4,
        text: "Jugo de frutas natural $7",
    }
]

const Breakfast = () => {
    return (
        <>
        {breakfast.map((brekkie)=>(
        <h3 key={brekkie.id}>{brekkie.text}</h3>)
        )}

        </>

    )
}
export default Breakfast