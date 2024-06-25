import React from 'react';
import { Link } from '@inertiajs/react';

const NavigationLink = ({ name, href, isActive }) => {
    return (
        <Link
            href={href}
            className={`text-sm font-medium 'text-cyan-400 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-600'`}
            //     ${
            //     isActive
            //         ? 'text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-600 dark:border-cyan-400'
            //         : 'text-cyan-400 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-600'
            // }`}
        >
            {name}
        </Link>
    );
};

export default NavigationLink;
