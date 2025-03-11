import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { tours } from "../TourData/data"; // Import the tour data from the separate file
import BackLink from "../components/BackLink";
import { FaLocationDot } from "react-icons/fa6";
import TourGallery from "../components/toursSlider/TourGallery";
import { Link } from "react-router-dom";

function TourDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const tour = tours.find((t) => t.id === parseInt(id)); // Find the tour by ID

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="px-6 min-h-screen   py-[95px]">
      <BackLink />
      <div className="flex xs:gap-7 lg:gap-16  lg:justify-center flex-wrap">
        <div className="lg:w-[45%]">
          <TourGallery images={tour.tourImages} />
        </div>

        <div className="lg:w-[45%] xs:w-full lg:py-3">
          <h1 className="font-MosafinBold text-4xl bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text">
            {tour.PackageName}
          </h1>
          <p className="text-[#FF8C00] mt-3 flex gap-2 items-center font-MosafinSemiBold">
            <FaLocationDot />
            <strong>Location:</strong> {tour.location}
          </p>
          <div className="description mt-3">
            <h1 className="font-MosafinBold text-3xl">
              <strong>Details:</strong>
            </h1>
            {tour.description}
          </div>

          <div className="mt-4">
            <p className="text-[#8d8c8c] font-MosafinMedium font-medium">
              <span className="font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text">
                » Duration:
              </span>{" "}
              ${tour.duration}
            </p>
            <p className="text-[#8d8c8c] font-MosafinMedium font-medium">
              <span className="font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text">
                » Pick up Area’s:
              </span>{" "}
              Near Railway Station
            </p>
            <p className="text-[#8d8c8c] font-MosafinMedium font-medium">
              <span className="font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text">
                » Price:
              </span>{" "}
              ${tour.price}
            </p>
            <p className="text-[#8d8c8c] font-MosafinMedium font-medium">
              <span className="font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text">
                » Rating:
              </span>{" "}
              {tour.rating} stars
            </p>
            <p className="text-[#8d8c8c] font-MosafinMedium font-medium">
              <span className="font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text">
                » Transportation:
              </span>{" "}
              {tour.transportation}
            </p>
            <p className="text-[#8d8c8c] font-MosafinMedium font-medium">
              <span className="font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text">
                » Extras:
              </span>{" "}
              {tour.extra}
            </p>
            <p className="text-[#8d8c8c] font-MosafinMedium font-medium">
              <span className="font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text">
                » Language:
              </span>{" "}
              {tour.language}
            </p>
            <p className="text-[#8d8c8c] font-MosafinMedium font-medium">
              <span className="font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text">
                » Entry Fees:
              </span>{" "}
              {tour.entryFees}
            </p>
          </div>
          <Link 
  to={`/bookingTour/${tour.id}`}
  className="flex justify-center items-center mt-5 bg-gradient-to-b xs:w-full from-[#c2f0f7] via-[#cbf1f7] to-[#cee6f6] lg:w-[400px] rounded-3xl py-3 shadow-2xl font-MosafinBold  text-lg tracking-wide  hover:shadow-lg hover:scale-105 transition-transform duration-300"
>
  Book Now
</Link>


        </div>
      </div>
    </div>
  );
}

export default TourDetail;
