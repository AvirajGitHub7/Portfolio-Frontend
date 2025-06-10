import React from 'react';

function Cards({ props }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 hover:shadow-xl transition cursor-pointer max-w-sm mx-auto">
      <img
        src={props.image}
        alt={props.name}
        className="h-20 w-20 mx-auto object-contain mb-4"
      />
      <h3 className="text-xl font-semibold text-center mb-2 text-black dark:text-white">{props.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm text-center">{props.description}</p>
    </div>
  );
}

export default Cards;
