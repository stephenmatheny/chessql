export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-sky-700 dark:text-sky-300 ` + className}>
            {value ? value : children}
        </label>
    );
}
