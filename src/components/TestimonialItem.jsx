import clsx from "clsx"; 
// Importing 'clsx' to conditionally apply multiple class names based on props.

const TestimonialItem = ({ item, containerClassName }) => {
  // Destructuring 'item' (which contains the testimonial data) and 'containerClassName' (additional classes) from props.

  return (
    <div
      className={clsx(
        // Combining the default styles and any additional classes passed via 'containerClassName'.
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        containerClassName,
      )}
    >
      {/* Blockquote to display the testimonial comment */}
      <blockquote className="h6 mb-8 text-p4">{item.comment}</blockquote>

      {/* Container for the avatar and user details */}
      <div className="flex items-center max-xl:-mr-8">
        {/* Avatar container with border and rounded shape */}
        <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5">
          {/* Avatar image - dynamically loaded from the 'item.avatarUrl' */}
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
            // Ensures the image fits within its container using object-cover.
          />
        </div>
        <div>
          {/* Name of the person giving the testimonial */}
          <h4 className="body-2 mb-0.5 text-p1">{item.name}</h4>
          {/* Role or title of the person, shown in uppercase and smaller text */}
          <p className="small-compact uppercase text-s3">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem; 
// Exporting the 'TestimonialItem' component for use in other parts of the application.
