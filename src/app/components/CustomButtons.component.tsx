import { FC, useState } from 'react';

interface CustomButtonsProps {
    title: string;
    buttonType: 'gradient' | 'border';
    onClick: () => void;
    buttonColor?: string;
    hoverColor?: string;
    fontColor?: string;
    fontWeight?: string
    fontSize?: string;
    paddingX?: string;
    paddingY?: string;
    borderColor?: string;
    gradientColor?: string;
}

const CustomButtons: FC<CustomButtonsProps> = ({ title, onClick, fontWeight, fontColor, buttonType, buttonColor, hoverColor, fontSize, paddingX, paddingY, borderColor, gradientColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    const buttonStyles = () => {
        switch (buttonType) {
            case 'border':
                return `rounded-full text-base border border-solid ${fontColor ? `text-${fontColor}` : ''} ${fontWeight ? `font-[${fontWeight}]` : ''} ${fontSize ? `text-[${fontSize}]` : ''} ${buttonColor ? ` ${buttonColor}` : ''} ${borderColor ? `border-[${borderColor}]` : ''} ${paddingX} ${paddingY} ${isHovered ? `hover:${hoverColor}` : ''}`;
            case 'gradient':
                return `rounded-full text-base border border-solid ${fontColor ? `text-${fontColor}` : ''} ${fontWeight ? `font-[${fontWeight}]` : ''} ${fontSize ? `text-[${fontSize}]` : ''} ${buttonColor ? ` ${buttonColor}` : ''} ${gradientColor ? `border-[${gradientColor}]` : ''} ${paddingX} ${paddingY} ${isHovered ? `hover:${hoverColor}` : ''}`;
            default:
                return `rounded-full text-base border border-solid ${fontColor ? `text-${fontColor}` : ''} ${fontWeight ? `font-[${fontWeight}]` : ''} ${fontSize ? `text-[${fontSize}]` : ''} ${buttonColor ? ` ${buttonColor}` : ''} ${gradientColor ? `border-[${gradientColor}]` : ''} ${paddingX} ${paddingY} ${isHovered ? `hover:${hoverColor}` : ''}`;
        }
    };

    return (
        <button
            className={`${buttonStyles()}`}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {title}
        </button>
    );
}


export default CustomButtons;
