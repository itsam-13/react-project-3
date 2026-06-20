import { useEffect } from "react"
import { asyncGetUsers } from "./store/userAction"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, [dispatch])


  return (
    <div>
      App
    </div>
  )
}

export default App
