import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import { AnimatePresence } from "framer-motion";
import Transition from "./components/Transition";


function App() {

  const location = useLocation();

  const routes = [
    { 
      name: 'about', 
      path: '/about', 
      component: <Transition><About/></Transition>
    },
    { 
      name: 'experience', 
      path: '/experience', 
      component: <Transition><Experience/></Transition>
    },
    { 
      name: 'Projects', 
      path: '/projects', 
      component: <Transition><Work/></Transition>
    },
    {
      name: 'contact',
      path: '/contact',
      component: <Transition><Contact/></Transition>,
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Transition><Home/></Transition>}/>
          {routes.map(route => (
            <Route key={route.name} path={route.path} element={route.component}/>
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
