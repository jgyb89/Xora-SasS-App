import { socials } from "../constants/index.jsx"; 
// Importing the list of social media links from a constants file.

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        {/* Main container for the footer with padding for spacing */}
        <div className="flex w-full max-md:flex-col">
          {/* Flex container for responsive layout, switching to a column layout on small screens */}

          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            {/* Section displaying copyright information */}
            <p className="opacity-70">Copyright, James Green</p>
            {/* Copyright text with reduced opacity */}
          </div>

          <div className="flex items-center justify-center sm:ml-auto">
            {/* Section for links to Privacy Policy and Terms of Use */}
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
              {/* Privacy Policy link with hover effect */}
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
              {/* Terms of Use link with hover effect */}
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {/* List of social media icons imported and with responsive positioning */}
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  {/* Social media link wrapping the icon */}
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                    // Social media icon with responsive sizing and alignment
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
// Exporting the 'Footer' component for use in other parts of the application.
