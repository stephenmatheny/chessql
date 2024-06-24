import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateChessClubInformationForm from './Partials/CreateChessClubInformationForm';

export default function Create({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-cyan-800 dark:text-logoColor leading-tight">Create Club</h2>}
        >
            <Head title={`Create`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-cyan-800 shadow sm:rounded-lg">
                        <CreateChessClubInformationForm
                            auth={auth}
                            className="max-w-xl"
                        />
                    </div>

                    {/* <div className="p-4 sm:p-8 bg-white dark:bg-cyan-800 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-cyan-800 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
