import { Link } from "@inertiajs/react";
import NavigationLink from "../NavigationLink";
import ClubPage from '@/Components/Club/ClubPage';
import MembersList from '@/Components/Club/MembersList';
// import EventsList from '@/Components/Club/EventsList';
// import MatchesList from '@/Components/Club/MatchesList';

export default function ClubNavigation({ club }) {
    return (
        <div className="mt-4">
            <nav className="flex justify-evenly">
                <NavigationLink
                    name="Overview"
                    href={route('club.show', { id: club.id })}
                />
                <NavigationLink
                    name="Members"
                    href={route('club.members', { id: club.id })}
                />
                {/* TODO: future addition
                <NavigationLink
                    name="Matches"
                    isActive={activeSection === 'Matches'}
                    onClick={() => handleSectionChange('Matches')}
                />
                */}
                {/* TODO: future addition
                <NavigationLink
                    name="Events"
                    isActive={activeSection === 'Events'}
                    onClick={() => handleSectionChange('Events')}
                />
                */}
            </nav>
        </div>
    )
}

