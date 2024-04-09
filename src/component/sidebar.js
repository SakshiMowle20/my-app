import React from 'react'
import {FaHome}  from "react-icons/fa";
import { FaTerminal} from "react-icons/fa";
import {FaRegCalendar} from "react-icons/fa";
import {FaEye} from "react-icons/fa";
import {FaUsers } from 'react-icons/fa';


const sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
    
   <ul className='mt-3 text-white font-bold'>
    <li className='mb-2 rounded hover: shadow hover:bg-blue-500 py-2'>

      <a href='' className='=px-3'>
        <FaHome className="inline -block w-6 h-6 mr-2 -mt-2"></FaHome>
        Home
      </a>
    </li>
    <li className='mb-2 rounded hover: shadow hover:bg-blue-500 py-2'>

      <a href='' className='=px-3'>
        < FaTerminal className="inline -block w-6 h-6 mr-2 -mt-2"></ FaTerminal>
        console
      </a>
    </li>
    <li className='mb-2 rounded hover: shadow hover:bg-blue-500 py-2'>

      <a href='' className='=px-3'>
        <FaRegCalendar className="inline -block w-6 h-6 mr-2 -mt-2"></FaRegCalendar>
       Attendence
      </a>
    </li>

    <li className='mb-2 rounded hover: shadow hover:bg-blue-500 py-2'>

      <a href='' className='=px-3'>
        <FaEye className="inline -block w-6 h-6 mr-2 -mt-2"></FaEye>
        Overview
      </a>
    </li>

    <li className='mb-2 rounded hover: shadow hover:bg-blue-500 py-2'>

      <a href='' className='=px-3'>
        <FaUsers  className="inline -block w-6 h-6 mr-2 -mt-2"></FaUsers >
      Staff
      </a>
    </li>


  </ul>
  </div>
    
      
   
  )
}

export default sidebar
