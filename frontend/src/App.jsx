import { useEffect } from "react"
import { asyncGetUsers } from "./store/userAction"

const App = () => {

  useEffect(() => {
    asyncGetUsers()
  }, [])


  return (
    <div>
      App
    </div>
  )
}

export default App
