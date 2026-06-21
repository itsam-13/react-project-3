import { useEffect } from "react"
import { asyncGetUsers } from "./store/userAction"
import { useDispatch, useSelector } from "react-redux"
import MainRoutes from './routes/MainRoutes';
import Nav from "./components/Nav";

const App = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log(data);
  

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, [dispatch])


  return (
    <div>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App
