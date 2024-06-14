import ClubPage from "@/Components/Clubs/ClubPage";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';



export default function Show({ auth, club, users }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-cyan-800 dark:text-logoColor leading-tight">Clubs</h2>}
            >
                <Head title="Clubs" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <ClubPage club={club} users={users} />
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
