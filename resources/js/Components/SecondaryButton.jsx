export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-white dark:bg-cyan-800 border border-cyan-300 dark:border-cyan-500 rounded-md font-semibold text-xs text-cyan-700 dark:text-cyan-300 uppercase tracking-widest shadow-sm hover:bg-cyan-50 dark:hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-cyan-800 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
