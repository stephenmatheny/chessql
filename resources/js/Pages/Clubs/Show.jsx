import ClubPage from "@/Components/Clubs/ClubPage";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';



export default function Show({ auth, club, users }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<>
                    <h2 className="font-semibold text-xl text-cyan-800 dark:text-logoColor leading-tight">
                        {club.name}
                    </h2>
                    <Link className="mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600" href="#">
                        {club.city}, {club.state}
                    </Link>
                </>}
            >
                <Head title={club.name} />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <ClubPage club={club} users={users} />
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
