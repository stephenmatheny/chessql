import { Link } from "@inertiajs/react";

export default function ClubPage({ club, users }) {
    const coordinators = users.data.filter(user => user.pivot.role === 'admin');
    return (
        <div className="max-w-full sm:max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4 block">
            <div className="mx-4 bg-white dark:bg-cyan-800 overflow-hidden shadow-sm rounded-lg">
                <div className="flex flex-col p-4 sm:p-6 text-cyan-900 dark:text-cyan-100">
                    {coordinators.length > 0 && (
                        <div className="mt-2">
                            Coordinators: {coordinators.map((coordinator, index) => (
                                <span key={coordinator.id}>
                                    <Link className="text-sm text-cyan-400  hover:duration-300 hover:text-cyan-600" href="#">
                                        {coordinator.first_name} {coordinator.last_name}
                                    </Link>
                                    {index < coordinators.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    )}

                    {users.data.length > 0 && (
                        <div className="mt-2">
                            Members: {users.data.map((user, index) => (
                                <span key={user.id}>
                                    <Link className="text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600" href={route('user.show', { id: user.id })}>
                                        {user.first_name} {user.last_name}
                                    </Link>
                                    {index < users.data.length - 1 ? ', ' : '...'}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
