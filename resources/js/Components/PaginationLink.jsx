import { Link } from "@inertiajs/react";

export default function PaginationLink({ href, className = '', disabled, active, children, ...props }) {
    return (
        <Link
            {...props}
            href={disabled ? null : href}
            className={
                `inline-flex items-center px-3 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest shadow-sm transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 ${
                    active ? 'bg-cyan-800 dark:bg-logoColor border-transparent text-white dark:text-cyan-800 hover:bg-cyan-700 dark:hover:bg-white focus:bg-cyan-700 dark:focus:bg-white active:bg-cyan-900 dark:active:bg-cyan-300' : 'bg-white dark:bg-cyan-800 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-700'
                } ${disabled && 'opacity-25 pointer-events-none'} ${className}`
            }
            disabled={disabled}
        >
            {children}
        </Link>
    );
}
