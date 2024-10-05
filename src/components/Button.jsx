import clsx from "clsx"; // Importing 'clsx' to conditionally apply class names
import { Marker } from "./Marker.jsx"; // Importing the 'Marker' component

// Button component declaration with destructured props
const Button = ({
  icon, // Icon image source
  children, // Button text or inner content
  href, // URL for anchor tags
  containerClassName, // Additional container class names
  onClick, // Click handler for button
  markerFill, // Marker fill color or property passed to the 'Marker' component
}) => {
  
  // Inner component defining the inner structure of the button or link
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        {/* Marker element positioned on the left side */}
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} /> {/* Custom marker with dynamic fill color */}
        </span>

        {/* Conditional rendering of an icon, if 'icon' prop is passed */}
        {icon && (
          <img
            src={icon} // Source of the icon
            alt="circle" // Alt text for the icon
            className="size-10 mr-5 object-contain z-10" // Styling for the icon, including size and margin
          />
        )}

        {/* Button or link text content */}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children} {/* Button text passed as children */}
        </span>
      </span>

      {/* Glow effect applied around the button */}
      <span className="glow-before glow-after" />
    </>
  );

  // Conditionally render an anchor tag or button based on the presence of 'href' prop
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group", // Default styling for the anchor tag
        containerClassName // Additional class names passed via 'containerClassName' prop
      )}
      href={href} // Link URL
    >
      <Inner /> {/* Render the Inner component inside the anchor tag */}
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group", // Default styling for the button
        containerClassName // Additional class names passed via 'containerClassName' prop
      )}
      onClick={onClick} // Click event handler
    >
      <Inner /> {/* Render the Inner component inside the button */}
    </button>
  );
};

export default Button; // Exporting the Button component for use in other parts of the application
