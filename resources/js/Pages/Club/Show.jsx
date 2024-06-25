import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ClubPage from '@/Components/Club/ClubPage';
import MembersList from '@/Components/Club/MembersList';
// import EventsList from '@/Components/Club/EventsList';
// import MatchesList from '@/Components/Club/MatchesList';
import NavigationButton from '@/Components/NavigationButton';

export default function Show({ auth, club, users }) {
    const coordinators = users.data.filter(user => user.pivot.role === 'admin');
    const isAdmin = auth.user && coordinators.some(coordinator => coordinator.id === auth.user.id);

    const [activeSection, setActiveSection] = useState('Overview');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <div className="flex flex-row justify-between">
                        <div>
                            <h2 className="font-semibold text-xl text-cyan-800 dark:text-logoColor leading-tight">
                                {club.name}
                            </h2>
                            <p className="mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600">
                                {club.city}, {club.state}
                            </p>
                        </div>
                        {isAdmin && (
                            <div>
                                <Link href={route('club.edit', { id: club.id })} className="pr-2 mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600">
                                    Edit
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <nav className="flex justify-evenly">
                            <NavigationButton
                                name="Overview"
                                isActive={activeSection === 'Overview'}
                                onClick={() => handleSectionChange('Overview')}
                            />
                            <NavigationButton
                                name="Members"
                                isActive={activeSection === 'Members'}
                                onClick={() => handleSectionChange('Members')}
                            />
                            {/* TODO: future addition
                            <NavigationButton
                                name="Matches"
                                isActive={activeSection === 'Matches'}
                                onClick={() => handleSectionChange('Matches')}
                            />
                            */}
                            {/* TODO: future addition
                            <NavigationButton
                                name="Events"
                                isActive={activeSection === 'Events'}
                                onClick={() => handleSectionChange('Events')}
                            />
                            */}
                        </nav>
                    </div>
                </>
            }
        >
            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                {/* Content based on active section */}
                {activeSection === 'Overview' && (
                    <ClubPage club={club} users={users} />
                )}
                {activeSection === 'Members' && (
                    <MembersList club={club} users={users} />
                )}
                {/* TODO: add this back after getting events in here
                {activeSection === 'Matches' && (
                    <MatchesList club={club} users={users} />
                )}
                */}
                {/* TODO: add this back after getting events in here
                {activeSection === 'Events' && (
                    <EventsList club={club} users={users} />
                )}
                */}
            </div>
        </AuthenticatedLayout>
    );
}
