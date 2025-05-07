// icons
import { BarChartBig, Send, Tent, User, Wrench } from "lucide-react";
import { NavLink } from "react-router-dom";


const Nav = () => {

  const navData = [
    { 
      name: 'home', 
      path: '/', 
      icon: <Tent /> 
    },
    { 
      name: 'work', 
      path: '/work', 
      icon: <BarChartBig />
    },
    { 
      name: 'Projects', 
      path: '/projects', 
      icon: <Wrench />
    },
    {
      name: 'contact',
      path: '/contact',
      icon: <Send />,
    },
  ];

  return (
    <nav className="fixed bottom-3 xl:bottom-[30%] xl:right-3 w-full xl:w-fit flex justify-center items-center">
      <div className="flex flex-row items-center xl:flex-col justify-between gap-0 w-full md:w-fit md:gap-12 py-3 px-7 xl:px-3 bg-white/10 rounded-full">
        {navData.map((link) => (
          <NavLink
            key={link.name}
            title={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-accent transition-all ease-linear duration-200" : "hover:text-accent transition-all ease-linear duration-200"
            }
          >
            {link.icon}
          </NavLink>
        ))}

      </div>
    </nav>
  );
};

export default Nav;
