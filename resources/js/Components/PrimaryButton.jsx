export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-cyan-800 dark:bg-logoColor border border-transparent rounded-md font-semibold text-xs text-white dark:text-cyan-800 uppercase tracking-widest hover:bg-cyan-700 dark:hover:bg-white focus:bg-cyan-700 dark:focus:bg-white active:bg-cyan-900 dark:active:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-cyan-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
