import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ClubList from '@/Components/Clubs/ClubList';
import { Head } from '@inertiajs/react';

export default function Index({ auth, clubs }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-cyan-800 dark:text-logoColor leading-tight">Clubs</h2>}
        >
            <Head title="Clubs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ClubList clubs={clubs} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
