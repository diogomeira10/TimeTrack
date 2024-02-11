import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    const renderedOptions = options.map((option,i) => (
        <div className='hover:bg-sky-100  rounded cursor-pointer p-1' onClick={() => handleOptionclick(option)} key={i}>
            {option}
        </div>
    ));

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);

        return () => {
        document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionclick = (option) => {
        setIsOpen(false);
        onChange(option);
        console.log(option)
    };

    return (
        <div ref={divEl} className='relative font-semibold'>
            <div className='flex justify-between p-2 bg-orange-700 text-white rounded-md items-center cursor-pointer' onClick={handleClick}>
                {value ? value : "Select..." }
                <span className='text-xl'>{isOpen ? <GoChevronLeft /> : <GoChevronDown />}</span>
            </div>
            {isOpen && <div className='bg-orange-700 mt-2 text-white rounded-md absolute text-sm top-full'>{renderedOptions}</div>}
        </div>
    );
}
