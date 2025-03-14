import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleIncrement, handleDecrement } from "../../redux/slices/tourSlice";

const PeopleCount = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.tourBooking.people);

  return (
    <>
      {people.map((person, index) => (
        <div
          key={index}
          className="border border-gray-600 px-4 py-3 rounded-lg mb-7 flex justify-between items-center"
        >
          <div>
            <h1 className="text-md font-semibold mb-1 text-left">{person.type}</h1>
            {person.conditions.length > 0 && (
              <ul className="text-left text-[#263238] text-sm pl-7 list-disc mb-2">
                {person.conditions.map((condition, i) => (
                  <li key={i}>{condition}</li>
                ))}
              </ul>
            )}
            <h1 className="text-orange-400 block text-md font-semibold text-left">
              Rs. {person.price}
            </h1>
          </div>

          {/* Counter buttons */}
          <div className="font-bold w-24 flex justify-between items-center rounded-lg p-1">
            <button
              type="button"
              onClick={() => dispatch(handleDecrement(index))}
              className="cursor-pointer font-semibold text-2xl"
            >
              -
            </button>
            <span className="text-xl font-semibold">{person.Number}</span>
            <button
              type="button"
              onClick={() => dispatch(handleIncrement(index))}
              className="cursor-pointer font-semibold text-2xl"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PeopleCount;
