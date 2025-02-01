import React from 'react';
import { Link } from 'react-router-dom';
import { tours } from '../TourData/data';
import Places from '../components/Places_To_Visit/Places';

function Tour() {
    return (
      <div className='px-6 py-[95px] '>
         <Places/>
      </div>
    );
}

export default Tour;
