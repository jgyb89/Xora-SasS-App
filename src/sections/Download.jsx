import { Element } from "react-scroll"; 
// Importing 'Element' from react-scroll to allow this section to be a scrollable target.

import { links, logos } from "../constants/index.jsx"; 
// Importing the 'links' and 'logos' data from a constants file.

import { Marker } from "../components/Marker.jsx"; 
// Importing a custom 'Marker' component used for visual markers in the UI.

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        {/* Wrapping the section in an 'Element' component to make it a scroll target */}
        <div className="container">
          <div className="flex items-center">
            {/* Left side content for the download section */}
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              <div className="mb-10">
                {/* Logo image at the top of the download section */}
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered.
                {/* Description text encouraging users to try the app on various platforms */}
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {/* Looping through 'links' to display download buttons for each platform */}
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                    // Classes to style each download button
                  >
                    <a
                      href={url}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                      // Anchor link to the download URL with additional styling for icons and transitions
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                        {/* Visual marker positioned above the download icon */}
                      </span>
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                        // Decorative lines behind the download icon
                      />
                      <span className="download_tech-icon">{icon}</span>
                      {/* Download icon specific to the platform */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              {/* Right side content for larger screens - preview image */}
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                {/* Container for the download preview with borders and rounded corners */}
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  {/* Decorative dots, like apple os style, in the preview */}
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                    // Screenshot image with rounded corners
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {/* Logos of companies or partners displayed below the download section horizontally*/}
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
                {/* Displaying each logo with specified dimensions. {width} and {height} makes the size of the logo since different companies have different sizes */}
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download; 
// Exporting the 'Download' component for use in other parts of the application.
