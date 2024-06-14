import { Link } from "@inertiajs/react";

export default function ClubPage({ club, users }) {
    console.log(users);
    return (
        <div className="max-w-full sm:max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4">
            <div className="mx-4 bg-white dark:bg-cyan-800 overflow-hidden shadow-sm rounded-lg">
                <div className="p-4 sm:p-6 text-cyan-900 dark:text-cyan-100">
                    {club.name}
                </div>
            </div>
        </div>
    );
}
