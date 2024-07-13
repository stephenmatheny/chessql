import ClubList from '@/Components/Club/ClubList';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Events({ auth, clubs }) {
    return (
        <MainLayout
            user={auth.user}
        >
            <Head title="Clubs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ClubList clubs={clubs} />
                </div>
            </div>
        </MainLayout>
    );
}
