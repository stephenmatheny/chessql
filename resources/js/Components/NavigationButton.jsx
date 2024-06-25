import React from 'react';

const NavigationButton = ({ name, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`text-sm font-medium ${
                isActive
                    ? 'text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-600 dark:border-cyan-400'
                    : 'text-cyan-400 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-600'
            }`}
        >
            {name}
        </button>
    );
};

export default NavigationButton;
