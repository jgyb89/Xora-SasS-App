import { testimonials } from "../constants/index.jsx"; 
// Importing the list of testimonials from a constants file.

import TestimonialItem from "../components/TestimonialItem.jsx"; 
// Importing the 'TestimonialItem' component to display each testimonial.

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2); 
  // Calculating the midpoint of the testimonials list to split it into two columns.

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      {/* Main container for the testimonials section with padding adjusted for different screen sizes */}
      <div className="container block lg:flex">
        {/* Flex container to handle responsive layout for large screens and block layout for small screens */}
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          {/* Left section with the heading */}
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          {/* Caption for the testimonials section */}
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
          {/* Main heading for the testimonials */}
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          {/* Container for the two testimonial columns with decorative elements before and after */}
          <div className="testimonials_group-after flex-50">
            {/* Left column for the first half of the testimonials, taking 50% of the screen with flex-50 */}
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
                // Passes a class to hide certain styles on the last testimonial item for smaller screens
              />
            ))}
          </div>

          <div className="flex-50">
            {/* Right column for the second half of the testimonials, taking 50% of the screen with flex-50 */}
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                // Passes a class to adjust styles for the last testimonial in this column
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
// Exporting the 'Testimonials' component to be used in other parts of the application.
