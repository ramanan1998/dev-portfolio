import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Work from "./pages/work/Work";
import Testimonials from "./pages/testimonials/Testimonials";
import Contact from "./pages/contact/Contact";


function App() {

  const routes = [
    { 
      name: 'about', 
      path: '/about', 
      component: <About/>
    },
    { 
      name: 'experience', 
      path: '/experience', 
      component: <Experience/>
    },
    { 
      name: 'work', 
      path: '/work', 
      component: <Work/>
    },
    {
      name: 'testimonials',
      path: '/testimonials',
      component: <Testimonials/>
    },
    {
      name: 'contact',
      path: '/contact',
      component: <Contact/>,
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        {routes.map(route => (
          <Route key={route.name} path={route.path} element={route.component}/>
        ))}
      </Route>
    </Routes>
  )
}

export default App
