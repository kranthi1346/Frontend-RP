import React, { FC } from "react";

interface TagProps {
    name: string;
}

const Tag: FC<TagProps> = ({ name }) => {
    // Define color scheme based on position type
    const colorScheme: { [key: string]: string } = {
        "Active": '#048C84',
        "Draft": '#697785',
        "Completed": '#2578C3',
        "On-Hold": '#C68914',
        "Closed": '#FF0000'
    };

    // Get color based on the tag name
    const color = colorScheme[name] || '#000'; // Default to black if no matching color found

    return (
        <div className="text-xs me-2 px-2.5 py-1.5 rounded-lg border inline-flex items-center justify-center" style={{ backgroundColor: `${color}10`, borderColor: color, color: color, fontSize: '12px', lineHeight: '14.4px', textAlign: 'left', fontWeight: '500' }}>
            {name}
        </div>
    );
};

export default Tag;
