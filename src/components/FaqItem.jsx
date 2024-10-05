import clsx from "clsx"; 
// Importing 'clsx' to conditionally apply class names based on state.

import { useState } from "react"; 
// Importing 'useState' to manage local component state.

import { SlideDown } from "react-slidedown"; 
// Importing 'SlideDown' for smooth dropdown animations.

import "react-slidedown/lib/slidedown.css"; 
// Importing the necessary CSS for the 'react-slidedown' animation.

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null); 
  // Local state to track the currently active FAQ item.

  const active = activeId === item.id; 
  // Check if the current FAQ item is active.

  return (
    <div className="relative z-2 mb-16"> 
      {/* Wrapper for each FAQ item */}
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        // Styling and layout for the FAQ item. Cursor turns to pointer on hover.
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id); 
          // Toggle FAQ active state. Close if already active, open if inactive.
        }}
      >
        <div className="flex-1"> 
          {/* Container for question text and index number */}
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {/* Display index number, adds a leading 0 if under 10 */}
            {index < 10 ? "0" : ""}
            {index}
          </div>

          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center", 
              // FAQ question text with transition effects.
              active && "max-lg:text-p1", 
              // Change text color if the item is active.
            )}
          >
            {item.question}
            {/* Display the FAQ question */}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4", 
            // Icon style with hover effect and border changes on active state.
            active && "before:bg-p1 after:rotate-0 after:bg-p1", 
            // Apply active styles to the icon when the FAQ is opened.
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
          {/* Decorative inner circle in the icon */}
        </div>
      </div>

      <SlideDown>
        {activeId === item.id && (
          // Only render the answer if the current FAQ item is active.
          <div className="body-3 px-7 py-3.5">
            {item.answer}
            {/* FAQ answer content */}
          </div>
        )}
      </SlideDown>

      <div
        className={clsx(
          "g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute", 
          // Background glow effect applied when the FAQ item is active and absolutly positioned in the container.
          active && "opacity-100", 
          // Apply opacity transition when active.
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        {/* Inner background glow */}
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
        {/* Decorative line on the left side when active */}
      </div>
    </div>
  );
};

export default FaqItem; 
// Exporting FaqItem component for use in other parts of the app.

/* npm install react-slidedown --legacy-peer-deps */
// Instruction to install 'react-slidedown' while managing potential dependency version conflicts.
