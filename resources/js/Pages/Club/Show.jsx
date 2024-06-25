import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ClubPage from '@/Components/Club/ClubPage';
import ClubHeader from '@/Components/Club/ClubHeader';
import ClubNavigation from '@/Components/Club/ClubNavigation';

export default function Show({ auth, club, users }) {
    const coordinators = users.data.filter(user => user.pivot.role === 'admin');
    const isAdmin = auth.user && coordinators.some(coordinator => coordinator.id === auth.user.id);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <ClubHeader club={club} isAdmin={isAdmin} />
                    <ClubNavigation club={club} />
                </>
            }
        >
            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ClubPage club={club} users={users} />
            </div>
        </AuthenticatedLayout>
    );
}
