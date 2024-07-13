import React, { useState } from 'react';
import ClubPage from '@/Components/Club/ClubPage';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Show({ auth, club, users }) {
    const coordinators = users.data.filter(user => user.pivot.role === 'admin');
    const isAdmin = auth.user && coordinators.some(coordinator => coordinator.id === auth.user.id);

    return (
        <MainLayout
            user={auth.user}
        >
            <Head title={club.name} />
            <div className="pt-4 mx-12">
                <ClubPage club={club} users={users} />
            </div>
        </MainLayout>
    );
}
