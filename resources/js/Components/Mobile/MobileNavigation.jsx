import NavigationIcons from '../Dynamic/NavigationIcons';

const MobileNavigation = () => {
    return (
        <nav className="sm:hidden sticky bottom-0 bg-white dark:bg-cyan-800 border-t border-cyan-700 dark:border-cyan-700 ">
            <div className='flex flex-row justify-around text-cyan-100'>
                <NavigationIcons />
            </div>
        </nav>
    );
}

export default MobileNavigation;
