import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import UpdateChessClubInformationForm from './Partials/UpdateChessClubInformationForm';
import { useState } from 'react';
import DeleteChessClub from './Partials/DeleteChessClub';

export default function Edit({ auth, club, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="font-semibold text-xl text-cyan-800 dark:text-logoColor leading-tight">
                            Edit: {club.name}
                        </h2>
                    </div>
                </div>
            }
        >
            <Head title={`Edit - ${club.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-cyan-800 shadow sm:rounded-lg">
                        <UpdateChessClubInformationForm
                            auth={auth}
                            club={club}
                            users={users}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-cyan-800 shadow sm:rounded-lg">
                        <DeleteChessClub className="max-w-xl" club={club} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
