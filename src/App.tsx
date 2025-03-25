import Welcome from './modules/welcome'
import Portfolio from './modules/portfolio'
import Testimonials from './modules/testimonials'
import Blog from './modules/blog'
import Contacts from './modules/contacts'

function App() {
  return (
    <div className="App">
      <Welcome />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contacts />
    </div>
  )
}

export default App
