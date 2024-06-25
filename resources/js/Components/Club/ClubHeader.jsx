import React from 'react';
import { Link } from '@inertiajs/react';

export default function ClubHeader({ club, isAdmin }) {
    return (
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
    )
}
