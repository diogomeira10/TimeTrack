import { useState, useRef } from 'react';
import { FaSearch } from "react-icons/fa";

export function SearchBar({term, onChange, handleInput, input}) {
    

    return (
        <div className='border flex justify-end ' >
            {input ? (
                <div className='flex gap-2 items-center'>
                    
                <input className='border rounded  text-orange-900 font-bold' onChange={onChange} value={term} />
                <div className='text-orange-900'>
                    <FaSearch className='mr-2' onClick={handleInput} />
                    </div>
                </div>
            ) : (
                
                <div className='text-orange-500 mr-2'><FaSearch onClick={handleInput} /></div>
            )}
        </div>
    );
}
