import About from './sections/About'
import Faqs from './sections/Faqs'
import Footer from './sections/Footer'
import Guardians from './sections/Guardians'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Numbers from './sections/Numbers'
import Roles from './sections/Roles'
import Testimonial from './sections/Testimonial'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Numbers />
      <Roles />
      <About />
      <Guardians />
      <Faqs />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
