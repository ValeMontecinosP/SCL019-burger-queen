import { fetchData } from "../firebase/firebase-functions"
import { Link } from "react-router-dom"

const Kitchen = () => {
  return (
    <>
      <Link to="/">
        <button className="mainButton"> Volver a Home </button>

      </Link>

      <h1>
        <a href="https://youtu.be/2WZ5X0AMdK4">Cooking up something good</a>
      </h1>



      {/*  {fetchData()} */}

    </>
  )
}

export default Kitchen