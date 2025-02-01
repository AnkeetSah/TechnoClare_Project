import React from 'react'
import {Link} from 'react-router-dom'

const BackLink = () => {
  return (
    <div>
      <div className="mb-6">
              <Link to="/" className="flex items-center text-[#0C6D7C] hover:underline">
                <i className="ri-arrow-left-long-line text-lg"></i>
                <span className="ml-2 text-sm font-medium">Back</span>
              </Link>
            </div>
    </div>
  )
}

export default BackLink
