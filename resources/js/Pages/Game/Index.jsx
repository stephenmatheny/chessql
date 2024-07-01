import GamePage from '@/Components/Game/GamePage';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, games, requestedGames, completeGames, acceptedGames }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="font-semibold text-xl text-cyan-800 dark:text-logoColor leading-tight">
                            Games
                        </h2>
                    </div>
                    <div>
                        <Link href={route('club.create')} className="pr-2 mt-auto text-sm text-cyan-400 hover:duration-300 hover:text-cyan-600">
                            Request Game
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Clubs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <GamePage games={games} requestedGames={requestedGames} completeGames={completeGames} acceptedGames={acceptedGames} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
