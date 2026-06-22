
import MainRoutes from './routes/MainRoutes';
import Nav from "./components/Nav";

const App = () => {



  return (
    <div className="px-[10%] text-white font-thin w-screen h-screen bg-gray-950">
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App
