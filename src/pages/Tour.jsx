import React from 'react';
import { Link } from 'react-router-dom';
import { tours } from '../TourData/data';
import Places from '../components/Places_To_Visit/Places';
import BackLink from '../components/BackLink';

function Tour() {
    return (
      <div className='px-6 py-[95px] '>
         <BackLink/>
         <Places/>
      </div>
    );
}

export default Tour;
