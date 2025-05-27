import { Link } from "react-router-dom"
import { assets } from "../assets/assets"
import { ArrowRight } from "lucide-react"

function ProjectsBtn() {
  return (
    <Link to="/projects" className="relative w-fit flex items-center justify-center mx-auto group cursor-pointer">
      <div className="w-[140px] mx-auto bg-circleStar bg-cover bg-center bg-no-repeat p-5 animate-spin-slow">
        <img className="w-full h-full object-cover" src={assets.PROJECTS_BUTTON_IMG} alt="button-img" />
      </div>
      <ArrowRight className="absolute group-hover:translate-x-2 transition-all duration-300" />
    </Link>
  )
}

export default ProjectsBtn
