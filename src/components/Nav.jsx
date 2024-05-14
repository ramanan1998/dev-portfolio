// icons
import { BarChartBig, MessageCircleCode, Send, Tent, User, Wrench } from "lucide-react";
import { NavLink } from "react-router-dom";


// nav data
export const navData = [
  { 
    name: 'home', 
    path: '/', 
    icon: <Tent /> 
  },
  { 
    name: 'about', 
    path: '/about', 
    icon: <User />
  },
  { 
    name: 'experience', 
    path: '/experience', 
    icon: <BarChartBig />
  },
  { 
    name: 'work', 
    path: '/work', 
    icon: <Wrench />
  },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <MessageCircleCode />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <Send />,
  },
];

const Nav = () => {
  return (
    <nav className="border border-white w-full flex flex-row xl:flex-col items-center justify-between gap-10">
      {navData.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {link.icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
