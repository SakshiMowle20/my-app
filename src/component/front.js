import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai'

const Front = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
     
      <div style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>
        <h2 style={{ fontWeight: 'bold' }}>Routine Cleaning</h2>
        <p>Date: 21 july 2024</p>
        <p>From: Pantry</p>
        <button style={{ backgroundColor: 'blue', border: 'black', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
        <AiOutlineCheck/>  Notify Staff
        </button>
      </div>


      <div style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>
        <h2 style={{ fontWeight: 'bold' }}>Routine Cleaning</h2>
        <p>Date: 21 july 2024</p>
        <p>From: Pantry</p>
        <button style={{ backgroundColor: 'grey', border: 'balck', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
        View Details
        </button> 
      </div>


      <div style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>
        <h2 style={{ fontWeight: 'bold' }}>Routine Cleaning</h2>
        <p>Date: 21 july 2024</p>
        <p>From: Pantry</p>
        <button style={{ backgroundColor: 'green', border: 'black', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
        View Details
        </button>
      </div>


      <div style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>
        <h2 style={{ fontWeight: 'bold' }}>Routine Cleaning</h2>
        <p>Date: 21 july 2024</p>
        <p>From: Pantry</p>
        <button style={{ backgroundColor: 'blue', border: 'black', color: 'black', padding: '10px 20px', borderRadius: '5px' }}>
          View Details
        </button>
      </div>



      
     <div style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>
        <h2 style={{ fontWeight: 'bold' }}>Routine Cleaning</h2>
        <p>Date: 21 july 2024</p>
        <p>From: Pantry</p>
        <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
        View Details
        </button>
      </div>


    </div>
  );
};

export default Front;
