import React, { FC, useState } from "react";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        // <details open={isOpen} className="mb-4" onClick={() => setIsOpen(!isOpen)}>
        <details open={true} className="mb-4" >
            <summary className="border-b border-gray-300 px-4 py-2 cursor-pointer flex justify-between items-center">
                <p className="text-[#2578C3] uppercase font-semibold text-base leading-21 text-left ">{title}</p>

                {isOpen ? (
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 7l5 5 5-5z" /></svg>
                ) : (
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5z" /></svg>
                )}
            </summary>

            {children}

        </details>
    );
};

export default Accordion;
