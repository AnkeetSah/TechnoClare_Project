import React from 'react';
import { useParams } from 'react-router-dom';
import { tours } from '../TourData/data'; // Import the tour data from the separate file
import BackLink from '../components/BackLink';
import { FaLocationDot } from "react-icons/fa6";

function TourDetail() {
    const { id } = useParams(); // Get the ID from the URL
    const tour = tours.find(t => t.id === parseInt(id)); // Find the tour by ID

    if (!tour) {
        return <div>Tour not found</div>;
    }

    return (
       
        <div className="px-6 py-[95px] ">
            <BackLink/>
           <div className='flex gap-10 h-screen '>
           <div className='w-[45%] bg-amber-600'>
                <h3>Tour Images:</h3>
                {tour.tourImages.map((image, index) => (
                    <img key={index} src={image} alt={`Tour Image ${index + 1}`} style={{ width: '200px', height: '150px', margin: '10px' }} />
                ))}
            </div>

            <div className='w-[45%] '>
            <h1 className=' font-MosafinBold text-4xl bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'>{tour.PackageName}</h1>
            <p className='text-[#FF8C00] mt-3 flex gap-2 items-center font-MosafinSemiBold'><FaLocationDot />
            <strong>Location:</strong> {tour.location}</p>
             <div className="description mt-3">
             <h1 className='font-MosafinBold text-3xl'><strong>Details:</strong></h1>
              {tour.description}
             </div>

           <div className='mt-4'>
           <p className='text-[#8d8c8c] font-MosafinMedium font-medium'><span className='font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'> » Duration:</span> ${tour.duration}</p>
            <p className='text-[#8d8c8c] font-MosafinMedium font-medium'><span className='font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'> » Pick up Area’s:</span> Near Railway Station</p>
            <p className='text-[#8d8c8c] font-MosafinMedium font-medium'><span className='font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'> » Price:</span> ${tour.price}</p>
            <p className='text-[#8d8c8c] font-MosafinMedium font-medium'><span className='font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'> » Price:</span> ${tour.price}</p>
            <p className='text-[#8d8c8c] font-MosafinMedium font-medium'><span className='font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'> » Rating:</span> {tour.rating} stars</p>
            <p className='text-[#8d8c8c] font-MosafinMedium font-medium'><span className='font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'> » Transportation:</span> {tour.transportation}</p>
            <p className='text-[#8d8c8c] font-MosafinMedium font-medium'><span className='font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'> » Extras:</span> {tour.extra}</p>
            
            <p className='text-[#8d8c8c] font-MosafinMedium font-medium'><span className='font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'> » Language:</span> {tour.language}</p>
            <p className='text-[#8d8c8c] font-MosafinMedium font-medium'><span className='font-MosafinBold text-[18px] font-extrbold bg-gradient-to-b from-[#0E515B] via-[#0E515B] to-[#454545] text-transparent bg-clip-text'> » Entry Fees:</span> {tour.entryFees}</p>
           </div>
            
            </div>
           </div>
        </div>
    );
}

export default TourDetail;
