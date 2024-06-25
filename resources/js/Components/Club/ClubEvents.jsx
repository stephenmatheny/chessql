import React from 'react';
import { Link } from '@inertiajs/react';

export default function ClubEvents({ club, users }) {
    const coordinators = users.data.filter(user => user.pivot.role === 'admin');

    return (
        <div className="max-w-full sm:max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4">
            <div className="mx-4 bg-white dark:bg-cyan-800 overflow-hidden shadow-sm rounded-lg">
                <div className="p-4 sm:p-6 text-cyan-900 dark:text-cyan-100">
                    {/* Club Details Section */}
                    <div className="mb-4">
                        <h3 className="font-semibold text-lg mb-2">Club Details</h3>
                        <p className="text-sm">
                            <span className="font-semibold">City:</span> {club.city}<br />
                            <span className="font-semibold">State:</span> {club.state}<br />
                            {/* Add more details here as needed */}
                        </p>
                    </div>

                    {/* Coordinators Section */}
                    {coordinators.length > 0 && (
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg mb-2">Coordinators</h3>
                            <div className="flex flex-wrap">
                                {coordinators.map((coordinator, index) => (
                                    <div key={coordinator.id} className="mr-4 mb-2">
                                        <Link className="text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600" href="#">
                                            {coordinator.first_name} {coordinator.last_name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Members Section (Optional, if needed in the future) */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Members</h3>
                        <div className="flex flex-wrap">
                            {users.data.map((user, index) => (
                                <div key={user.id} className="mr-4 mb-2">
                                    <Link className="text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600" href={route('user.show', { id: user.id })}>
                                        {user.first_name} {user.last_name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
