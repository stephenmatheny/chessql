import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 dark:border-indigo-600 text-cyan-900 dark:text-cyan-100 focus:border-indigo-700 '
                    : 'border-transparent text-cyan-500 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:border-cyan-300 dark:hover:border-cyan-700 focus:text-cyan-700 dark:focus:text-cyan-300 focus:border-cyan-300 dark:focus:border-cyan-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
