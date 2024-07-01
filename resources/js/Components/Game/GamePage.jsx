import React from 'react';
import { Link, useForm } from '@inertiajs/react';

export default function GamePage({ games = [], requestedGames = [], completeGames = [], acceptedGames = [] }) {
    console.log(requestedGames);
    const { post, processing } = useForm();

    const handleAccept = (gameId) => {
        post(`/games/${gameId}/accept`, {
            onFinish: () => {
                // Handle any additional logic after the request is finished
            }
        });
    };

    const handleCancel = (gameId) => {
        post(`/games/${gameId}/cancel`, {
            onFinish: () => {
                // Handle any additional logic after the request is finished
            }
        });
    };

    return (
        <div className="max-w-full sm:max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4 space-y-4">
            {/* Accepted Games Section */}
            <div className="mx-4 bg-white dark:bg-cyan-800 overflow-hidden shadow-sm rounded-lg">
                <h3 className="font-semibold text-lg mb-2 p-4 sm:p-6 text-cyan-900 dark:text-cyan-100">Accepted Games</h3>
                <div className="p-4 sm:p-6 text-cyan-900 dark:text-cyan-100 grid grid-flow-row-dense grid-cols-3 grid-rows-3">
                    {acceptedGames.length > 0 ? (
                        acceptedGames.map(game => (
                            <div key={game.id} className="mb-4">
                                <p><strong>Player Color:</strong> {game.pivot.color}</p>
                                {/* <p><strong>Players:</strong> {game.users.map(user => user.name).join(', ')}</p> */}
                                <Link href={`/games/${game.id}`} className="text-blue-500">View Game</Link>
                                <div className="mt-2">
                                    <button
                                        onClick={() => handleAccept(game.id)}
                                        disabled={processing}
                                        className="mr-2 bg-green-500 text-white px-4 py-2 rounded">
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => handleCancel(game.id)}
                                        disabled={processing}
                                        className="bg-red-500 text-white px-4 py-2 rounded">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No requested games.</p>
                    )}
                </div>
            </div>

            {/* Requested Games Section */}
            <div className="mx-4 bg-white dark:bg-cyan-800 overflow-hidden shadow-sm rounded-lg">
                <h3 className="font-semibold text-lg mb-2 p-4 sm:p-6 text-cyan-900 dark:text-cyan-100">Requested Games</h3>
                <div className="p-4 sm:p-6 text-cyan-900 dark:text-cyan-100 grid grid-flow-row-dense grid-cols-3 grid-rows-3">
                    {requestedGames.length > 0 ? (
                        requestedGames.map(game => (
                            <div key={game.id} className="mb-4">
                                <p><strong>Player Color:</strong> {game.pivot.color}</p>
                                {/* <p><strong>Players:</strong> {game.users.map(user => user.name).join(', ')}</p> */}
                                <Link href={`/games/${game.id}`} className="text-blue-500">View Game</Link>
                                <div className="mt-2">
                                    <button
                                        onClick={() => handleAccept(game.id)}
                                        disabled={processing}
                                        className="mr-2 bg-green-500 text-white px-4 py-2 rounded">
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => handleCancel(game.id)}
                                        disabled={processing}
                                        className="bg-red-500 text-white px-4 py-2 rounded">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No requested games.</p>
                    )}
                </div>
            </div>

            {/* Completed Games Section */}
            <div className="mx-4 bg-white dark:bg-cyan-800 overflow-hidden shadow-sm rounded-lg">
                <div className="p-4 sm:p-6 text-cyan-900 dark:text-cyan-100">
                    <h3 className="font-semibold text-lg mb-2">Completed Games</h3>
                    {completeGames.length > 0 ? (
                        completeGames.map(game => (
                            <div key={game.id} className="mb-4">
                                <p><strong>Game ID:</strong> {game.id}</p>
                                {/* <p><strong>Players:</strong> {game.users.map(user => user.name).join(', ')}</p> */}
                                <p><strong>Completed At:</strong> {new Date(game.updated_at).toLocaleString()}</p>
                                <Link href={`/games/${game.id}`} className="text-blue-500">View Game</Link>
                            </div>
                        ))
                    ) : (
                        <p>No completed games.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
