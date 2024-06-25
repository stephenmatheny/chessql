import { Link } from "@inertiajs/react";

export default function MemberCard({ user }) {
    // const coordinators = club.users.filter(user => user.pivot.role === 'admin');
    return (
        <div className="bg-white dark:bg-cyan-800 overflow-hidden shadow-sm rounded-lg p-4 sm:p-6 text-cyan-900 dark:text-cyan-100 flex flex-col justify-center items-center">
            <div>
                {user.first_name} {user.last_name}
            </div>
            <div className="mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600">
                {user.username}
            </div>
        </div>
    );
}
