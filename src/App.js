import './App.css';
import NavigationBar from "./components/NavigationBar";
import Intro from './components/Intro';
import "./style/landingPage.css"
import Trending from "./components/Trending"
import Superhero from "./components/Superhero"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      {/* end of intro */}
      <div className='myBG'>
        <NavigationBar />
        <Intro/>
      </div>
    {/* end of intro */}

    {/* trending section */}
    <div className='trending'>
      <Trending/>
    </div>

    <div className='superhero'>
      <Superhero/>
    </div>

    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default App