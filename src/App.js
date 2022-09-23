import mobile from "./images/image-hero-mobile.png"
import desktop from "./images/image-hero-desktop.png"
import audiophile from "./images/client-audiophile.svg"
import databiz from "./images/client-databiz.svg"
import maker from "./images/client-maker.svg"
import meet from "./images/client-meet.svg"
import logo from "./images/logo.svg"
import chevronDown from "./images/icon-arrow-down.svg"
import menuOpen from "./images/icon-menu.svg"

function App() {
  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar")

    navbar.classList.toggle("open")
  }
  return (
    <>
    <header className="p-5 flex items-center justify-between">
      <div>
        <img src={logo} alt="" />
        <nav className="navbar open">
          <div>
            <button>
              features <img src={chevronDown} alt="" /> 
            </button>
          </div>

          <div>
            <button>
              Company <img src={chevronDown} alt="" /> 
            </button>
          </div>
          <div>
            <button>careers</button>
            </div>
          <div>
            <button>About</button>
          </div>   
        </nav>
      </div>

      <div>
        <button onClick={handleOpenMenu}>
          <img src={menuOpen} alt="" />
        </button>
      </div>

      <div className="hidden lg:block ">
        <button>Login</button>
        <button>Sign Up</button>
      </div>

    </header>
      <section className="flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center lg:max-w-5xl md:mx-auto">
        <article className="Text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">Make remote work</h1>
          <p className="mb-5">Get your team in sync, no matter your location. Streamline processes, 
          create team rituals, and watch productivity soar.</p>
          <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer">Learn more</button>

          <ul className="grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start ">
            <li>
              <img src={databiz} alt="" className="w-16" />
            </li>
            <li>
              <img src={audiophile} alt=""  className="w-16 md:w-24" />
            </li>
            <li>
              <img src={meet} alt=""  className="w-16 md:w-24 " />
            </li>
            <li>
              <img src={maker} alt=""  className="w-16 md:w-24" />
            </li>
          </ul>
        </article>

        <article>
          <picture>
            <source media="(min-width: 768px)" srcSet={desktop} />
            <img src={mobile} alt="" className="w-full" />
          </picture>
        </article>
      </section>
    </>
  );
}

export default App
