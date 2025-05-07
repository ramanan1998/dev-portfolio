import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import { AnimatePresence } from "framer-motion";
import Transition from "./components/Transition";
import Projects from "./pages/projects/Projects";


function App() {

  const location = useLocation();

  const routes = [
    { 
      name: 'work', 
      path: '/work', 
      component: <Transition><Work/></Transition>
    },
    { 
      name: 'Projects', 
      path: '/projects', 
      component: <Transition><Projects/></Transition>
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
