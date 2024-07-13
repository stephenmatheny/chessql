import ClubHeader from '@/Components/Club/ClubHeader';
import ClubNavigation from '@/Components/Club/ClubNavigation';
import MembersList from '@/Components/Club/MembersList';
import MainLayout from '@/Layouts/MainLayout';

export default function Members({ auth, club, users }) {
    const coordinators = club.users.filter(user => user.pivot.role === 'admin');
    const isAdmin = auth.user && coordinators.some(coordinator => coordinator.id === auth.user.id);
    return (
        <MainLayout
            user={auth.user}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <MembersList users={users} />
                </div>
            </div>
        </MainLayout>
    );
}
