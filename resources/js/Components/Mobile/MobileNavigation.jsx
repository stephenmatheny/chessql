import { Link } from '@inertiajs/react';
import { IconMenu2, IconHomeFilled, IconChessFilled, IconUsersGroup } from '@tabler/icons-react';

const MobileNavigation = () => {
    const rgb = "rgb(207 250 254)";

    return (
        <nav className="sm:hidden sticky bottom-0 bg-white dark:bg-cyan-800 border-t border-cyan-700 dark:border-cyan-700  pt-4 px-2">
            <div className='flex flex-row justify-around text-cyan-100'>
                {/* TODO: decide if I want this or not <MenuContainer>
                    <IconMenu2 color={rgb} />
                </MenuContainer> */}

                <IconContainer href="/">
                    <IconHomeFilled color={rgb} />
                    Home
                </IconContainer>

                <IconContainer href={route('club.index')}>
                    <IconUsersGroup color={rgb} />
                    Club
                </IconContainer>

                <IconContainer href={route('game.index')}>
                    <IconChessFilled color={rgb} />
                    Game
                </IconContainer>
            </div>
        </nav>
    );
}

const MenuContainer = ({ children }) => {
    return (
        <div className="rounded-full p-2 hover:bg-cyan-700">
            {children}
        </div>
    );
}

const IconContainer = ({ children, href }) => {
    return (
        <Link href={href} className="flex flex-col justify-center content-center items-center size-16 rounded hover:bg-cyan-700">
            {children}
        </Link>
    );
}

export default MobileNavigation;
