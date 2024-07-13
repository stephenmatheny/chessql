import GamePage from '@/Components/Game/GamePage';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, games, requestedGames, completeGames, acceptedGames }) {
    return (
        <MainLayout
            user={auth.user}
        >
            <Head title="Clubs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <GamePage games={games} requestedGames={requestedGames} completeGames={completeGames} acceptedGames={acceptedGames} />
                </div>
            </div>
        </MainLayout>
    );
}
