import NavigationIcons from '../Dynamic/NavigationIcons';

const WebNavigation = () => {
    const rgb = "rgb(207 250 254)";

    return (
        <nav className="hidden sm:flex bg-white dark:bg-cyan-800 border-r border-cyan-700 dark:border-cyan-700 justify-between pt-4 px-2">
            <div className='flex flex-col justify-start space-y-2 content-center items-center text-cyan-100'>
                <NavigationIcons />
            </div>
        </nav>
    );
}

export default WebNavigation;
