import { Link } from '@inertiajs/react';
import { IconChessFilled, IconHomeFilled, IconMenu2, IconUsersGroup } from '@tabler/icons-react';

const NavigationIcons = () => {
    const rgb = "rgb(207 250 254)";

    return (
        <>
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
        </>
    );
}

const MenuContainer = ({ children }) => {
    return (
        <div className="-md-full p-2 hover:bg-cyan-700">
            {children}
        </div>
    );
}

const IconContainer = ({ children, href }) => {
    return (
        <Link href={href} className="flex flex-col justify-center content-center items-center size-16 rounded-md hover:bg-cyan-700">
            {children}
        </Link>
    );
}

export default NavigationIcons;
