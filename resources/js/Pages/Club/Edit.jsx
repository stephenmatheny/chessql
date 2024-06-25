import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import UpdateChessClubInformationForm from './Partials/UpdateChessClubInformationForm';
import { useState } from 'react';

export default function Edit({ auth, club, users }) {
    const { delete: destroy, processing } = useForm();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault(); // Prevent default navigation behavior
        const confirmation = prompt(`Type "delete" to confirm deletion of "${club.name}":`);
        if (confirmation === 'delete') {
            setIsDeleting(true);
            destroy(route('club.destroy', club.id), {
                onSuccess: () => {
                    setIsDeleting(false);
                },
                onError: (errors) => {
                    setIsDeleting(false);
                    console.error(errors);
                },
            });
        } else {
            alert('Deletion cancelled.');
        }
    };

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
                    <div>
                        <button
                            onClick={handleDelete}
                            disabled={processing}
                            className="pr-2 mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600"
                        >
                            Delete
                        </button>
                        {isDeleting && (
                            <span className="ml-2 text-sm text-cyan-600">Deleting...</span>
                        )}
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
