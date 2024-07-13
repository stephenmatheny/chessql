import { Link } from "@inertiajs/react";

export default function ClubCard({ club }) {
    const coordinators = club.users.filter(user => user.pivot.role === 'admin');
    return (
        // <div className="">
            <div className="mx-12 my-4 bg-white dark:bg-cyan-800 overflow-hidden shadow-sm rounded-md">
                <div className="flex flex-col p-4 sm:p-6 text-cyan-900 dark:text-cyan-100">
                    <Link className=" hover:duration-300 hover:text-cyan-600" href={route('club.show', { id: club.id })}>
                        {club.name}
                    </Link>
                    <Link className="mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600" href="#">
                        { club.city }, { club.state }
                    </Link>
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
                </div>
            </div>
        // </div>
    );
}
