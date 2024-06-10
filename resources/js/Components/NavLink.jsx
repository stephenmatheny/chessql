import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 dark:border-indigo-600 text-sky-900 dark:text-sky-100 focus:border-indigo-700 '
                    : 'border-transparent text-sky-500 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:border-sky-300 dark:hover:border-sky-700 focus:text-sky-700 dark:focus:text-sky-300 focus:border-sky-300 dark:focus:border-sky-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
