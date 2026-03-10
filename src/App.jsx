import Header from './Components/Header.jsx'
import Hero from './Components/hero.jsx'
import PatientService from './Components/PatientService.jsx'
import CenterOfExcellence from './Components/centerOfExcellence.jsx'
import Choose from './Components/choose.jsx'
import WhereJourney from './Components/whereJourney.jsx'
import Reward from './Components/Reward.jsx'
import Leadership from './Components/leadership.jsx'
import LatestBlog from './Components/LatestBlog.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-white/100 via-white/40 to-transparent pb-10">
          <Header />
        </div>
        <Hero />
      </div>

      <PatientService />
      <CenterOfExcellence />
      <Choose />
      <WhereJourney />

      <Leadership />
      <Reward />
      <LatestBlog />
      <Footer />
    </>
  )
}

export default App
