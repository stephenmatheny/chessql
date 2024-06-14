import { Link } from "@inertiajs/react";

export default function ClubCard({ club }) {
    return (
        <Link href={route('clubs.show', { id: club.id })} className="max-w-full sm:max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4 block">
            <div className="mx-4 bg-white dark:bg-cyan-800 overflow-hidden shadow-sm rounded-lg transform hover:scale-105">
                <div className="p-4 sm:p-6 text-cyan-900 dark:text-cyan-100">
                    {club.name}
                </div>
            </div>
        </Link>
    );
}
