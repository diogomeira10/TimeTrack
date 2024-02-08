import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    const renderedOptions = options.map((option,i) => (
        <div className='hover:bg-sky-100  rounded cursor-pointer p-1' onClick={() => handleOptionclick(option)} key={option}>
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
    };

    return (
        <div ref={divEl} className='relative font-semibold'>
            <div className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
                {value ? value : "Select..." }
                <span className='text-lg'>{isOpen ? <GoChevronLeft /> : <GoChevronDown />}</span>
            </div>
            {isOpen && <div className='absolute top-full'>{renderedOptions}</div>}
        </div>
    );
}
