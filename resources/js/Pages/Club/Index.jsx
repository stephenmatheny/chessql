import ClubList from '@/Components/Club/ClubList';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, clubs }) {
    return (
        <MainLayout
            user={auth.user}
        >
            <Head title="Clubs" />

            <ClubList clubs={clubs} />
        </MainLayout>
    );
}
