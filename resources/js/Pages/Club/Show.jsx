import React, { useState } from 'react';
import ClubPage from '@/Components/Club/ClubPage';
import MainLayout from '@/Layouts/MainLayout';

export default function Show({ auth, club, users }) {
    const coordinators = users.data.filter(user => user.pivot.role === 'admin');
    const isAdmin = auth.user && coordinators.some(coordinator => coordinator.id === auth.user.id);

    return (
        <MainLayout
            user={auth.user}
        >
            <div className="pt-4 px-12">
                <ClubPage club={club} users={users} />
            </div>
        </MainLayout>
    );
}
