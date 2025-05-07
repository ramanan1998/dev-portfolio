export const Icons = {
    githubIcon: () => (
        <div className="group relative">
            <button>
                <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6 hover:scale-125 duration-200 hover:stroke-accent"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </button>
            <span className="absolute text-black -top-9 left-[50%] -translate-x-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-1 text-xs font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100"
            >
                GitHub
            </span>
        </div>
    ),

    instagramIcon: () => (
        <div className="group relative">
            <button>
                <svg
                    viewBox="0 0 16 16"
                    className="bi bi-instagram transform transition-transform duration-300 hover:scale-125 hover:text-accent h-6 w-6"
                    fill="currentColor"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    ></path>
                </svg>
            </button>
            <span className="absolute text-black -top-9 left-[50%] -translate-x-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-1 text-xs font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100"
            >
                Instagram
            </span>
        </div>
    ),

    linkedinIcon: () => (
        <div className="group relative">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin h-6 w-6 transform transition-transform duration-300 hover:scale-125 hover:text-accent"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </button>
            <span className="absolute text-black -top-9 left-[50%] -translate-x-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-1 text-xs font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100"
            >
                Linkedin
            </span>
        </div>
    )
}