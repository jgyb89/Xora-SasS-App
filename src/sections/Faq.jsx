import { Element } from "react-scroll"; 
// Importing 'Element' from react-scroll to make this section a scrollable target.

import { faq } from "../constants/index.jsx"; 
// Importing the list of FAQ items from a constants file.

import FaqItem from "../components/FaqItem.jsx"; 
// Importing the 'FaqItem' component to display each individual FAQ item.

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2); 
  // Calculating the midpoint of the FAQ list to split it into two columns.

  return (
    <section>
      <Element name="faq" className="relative">
        {/* Element wraps the FAQ section to allow scroll-to functionality */}
        <div className="container relative z-2 py-28">
          {/* Container for the section's header */}
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn't kill the cat, it gave it answers.
              {/* FAQ section title */}
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
              {/* Subheading for the FAQ section */}
            </p>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
          {/* Vertical line decoration in the middle of the FAQ section */}
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          {/* Wrapper for the FAQ items with a glowing background and border */}
          <div className="container flex gap-10 max-lg:block">
            {/* Flex container for dividing FAQ items into two columns */}
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              {/* Logo placed at the top center of the FAQ section */}
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            <div className="relative flex-1 pt-24">
              {/* Left column for the first half of the FAQ items */}
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
                // Displaying the first half of the FAQ items
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {/* Right column for the second half of the FAQ items */}
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
                // Displaying the second half of the FAQ items, with adjusted index
              ))}
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
          {/* Vertical line decoration between the two columns, hidden on small screens */}
        </div>
      </Element>
    </section>
  );
};

export default Faq; 
// Exporting the 'Faq' component to be used in other parts of the application.
