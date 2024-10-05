import { Link as LinkScroll } from "react-scroll"; // Importing the 'Link' component from react-scroll and renaming it to 'LinkScroll'
import { useEffect, useState } from "react"; // Importing React hooks 'useEffect' and 'useState'
import clsx from "clsx"; // Importing 'clsx' for conditional className handling

// Header component declaration
const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false); // State to track if the user has scrolled down the page
  const [isOpen, setIsOpen] = useState(false); // State to track if the mobile menu is open

  useEffect(() => {
    // useEffect to handle the scroll event
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32); // Sets 'hasScrolled' to true if the user scrolls more than 32px
    };

    window.addEventListener("scroll", handleScroll); // Adds the scroll event listener when the component mounts

    return () => {
      window.removeEventListener("scroll", handleScroll); // Removes the scroll event listener when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  // NavLink component to create navigation links
  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)} // Closes the mobile menu when a link is clicked
      to={title} // Scroll target based on the 'title' prop
      offset={-100} // Scroll offset for positioning
      spy // Activates link highlighting when the scroll target is active
      smooth // Enables smooth scrolling behavior
      activeClass="nav-active" // Class applied to the active link
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  // The header return block rendering the component UI
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4", // Default styling for the header
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]" // Applies a reduced padding and background if the user has scrolled
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5"> 
        <a className="lg:hidden flex-1 cursor-pointer z-2"> 
          <img src="/images/xora.svg" width={115} height={55} alt="logo" /> {/* Logo for mobile view */}
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0", // Default styling for the mobile menu
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none" // Controls menu visibility based on 'isOpen' state
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto"> 
              <ul className="flex max-lg:block max-lg:px-12"> {/* Navigation links layout */}
                <li className="nav-li"> 
                  <NavLink title="features" /> {/* 'Features' link */}
                  <div className="dot" />
                  <NavLink title="pricing" /> {/* 'Pricing' link */}
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero" // Link to the 'hero' section of the page
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer" // Desktop logo with scroll behavior
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo" // Logo for desktop
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" /> {/* 'FAQ' link */}
                  <div className="dot" />
                  <NavLink title="download" /> {/* 'Download' link */}
                </li>
              </ul>
            </nav>

            {/* Decorative background image */}
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5" // Additional background with blending effect
              />
            </div>
          </div>
        </div>

        {/* Button to toggle mobile menu */}
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)} // Toggles 'isOpen' state to show/hide the mobile menu
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`} // Dynamically switches button icon based on 'isOpen' state
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header; // Exporting the Header component for use in other parts of the app
