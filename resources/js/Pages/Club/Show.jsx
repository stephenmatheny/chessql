import ClubPage from "@/Components/Club/ClubPage";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';



export default function Show({ auth, club, users }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <div className="flex flex-row justify-between">
                        <div>
                            <h2 className="font-semibold text-xl text-cyan-800 dark:text-logoColor leading-tight">
                                {club.name}
                            </h2>
                            <Link className="mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600" href="#">
                                {club.city}, {club.state}
                            </Link>
                        </div>
                        <div>
                            <Link href={route('club.edit', { id: club.id })} className="pr-2 mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600">
                                Edit
                            </Link>
                        </div>
                    </div>
                }
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
