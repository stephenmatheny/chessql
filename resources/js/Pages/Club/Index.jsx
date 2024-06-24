import ClubList from '@/Components/Club/ClubList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, clubs }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="font-semibold text-xl text-cyan-800 dark:text-logoColor leading-tight">
                            Clubs
                        </h2>
                    </div>
                    <div>
                        <Link href={route('club.create')} className="pr-2 mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600">
                            Create New Club
                        </Link>
                    </div>
                </div>
            }
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
