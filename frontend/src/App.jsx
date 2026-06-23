
import MainRoutes from './routes/MainRoutes';
import Nav from "./components/Nav";
import { useEffect } from 'react';
import { asyncCurrentUser } from './store/actions/userActions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncCurrentUser())
  }, [dispatch])


  return (
    <div className="px-[10%] text-white font-thin w-screen h-screen bg-gray-950">
      <Nav />
      <MainRoutes />
    </div>
  )
}

export default App
