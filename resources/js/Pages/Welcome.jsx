import ApplicationLogo from '@/Components/ApplicationLogo';
import BackgroundImageFix from '@/Components/BackgroundImageFix';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen flex flex-col bg-cyan-300 text-black/50 dark:bg-cyan-900 dark:text-white/50">
                <BackgroundImageFix />

                {/* Authentication Links Section */}
                <section className="sticky top-0 z-50 bg-white px-5 py-4 shadow-md dark:bg-gray-700">
                    <div className="mx-auto flex max-w-6xl justify-end">
                        <nav className="flex space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('club.index')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#72EEFF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Clubs
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#72EEFF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#72EEFF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </section>

                <div className="flex-grow flex flex-col items-center justify-center selection:bg-[#72EEFF] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                        {/* Hero Section */}
                        <section className="flex flex-col items-center px-20 py-20 shadow-md md:flex-row" id="hero">
                            <div className="mt-10 md:mt-0">
                                <img alt="Hero Image" className="mx-auto rounded-lg shadow-md md:mr-0" src="https://picsum.photos/800/400?random=1" />
                            </div>
                            <div className="mx-auto max-w-6xl text-center md:text-right">
                                <div className="flex flex-col items-center md:items-end">
                                    <div className="h-24 w-24">
                                        <ApplicationLogo className="mx-auto" />
                                    </div>
                                    <h1 className="mt-5 text-4xl font-bold">Welcome to ChessQL - Your Ultimate Chess Club Hub</h1>
                                    <p className="mt-3 text-xl">Join, Play, and Compete in the World of Chess</p>
                                </div>
                            </div>
                        </section>

                        {/* Features Section */}
                        <section className="bg-white px-5 py-10 dark:bg-gray-900" id="features">
                            <div className="mx-auto max-w-6xl">
                                <h2 className="mb-10 text-left text-3xl font-semibold">Key Features</h2>
                                {/* Features for Club Admins */}
                                <div className="mb-10">
                                    <h3 className="mb-5 text-center text-2xl font-semibold">For Club Admins</h3>
                                    <div className="mb-5 flex flex-col md:flex-row md:space-x-10">
                                        <div className="flex-1 text-center">
                                            <h4 className="mb-3 text-xl font-semibold">Create and Manage Club Pages</h4>
                                            <p className="mb-3 text-lg">Easily set up your chess club’s page, manage members, and promote your club.</p>
                                            <img alt="Create and Manage Club Pages Image" className="mx-auto rounded-lg shadow-md" src="https://picsum.photos/200?random=2" />
                                        </div>
                                        <div className="mt-10 flex-1 text-center md:mt-0">
                                            <h4 className="mb-3 text-xl font-semibold">Generate Live Tournament Brackets</h4>
                                            <p className="mb-3 text-lg">Automate the creation of live tournament brackets based on your members' rankings and presence. No more manual setups!</p>
                                            <img alt="Generate Live Tournament Brackets Image" className="mx-auto rounded-lg shadow-md" src="https://picsum.photos/200?random=3" />
                                        </div>
                                    </div>
                                </div>
                                {/* Features for Chess Players */}
                                <div>
                                    <h3 className="mb-5 text-center text-2xl font-semibold">For Chess Players</h3>
                                    <div className="flex flex-col md:flex-row md:space-x-10">
                                        <div className="flex-1 text-center">
                                            <h4 className="mb-3 text-xl font-semibold">Challenge and Record Matches</h4>
                                            <p className="mb-3 text-lg">Challenge fellow club members to over-the-board games and record your matches on ChessQL. Your results will affect local, district, regional, state-wide, and national rankings.</p>
                                            <img alt="Challenge and Record Matches Image" className="mx-auto rounded-lg shadow-md" src="https://picsum.photos/200?random=4" />
                                        </div>
                                        <div className="mt-10 flex-1 text-center md:mt-0">
                                            <h4 className="mb-3 text-xl font-semibold">Find Local Chess Clubs</h4>
                                            <p className="mb-3 text-lg">Whether at home or on the go, locate nearby chess clubs and connect with fellow chess enthusiasts.</p>
                                            <img alt="Find Local Chess Clubs Image" className="mx-auto rounded-lg shadow-md" src="https://picsum.photos/200?random=5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Why Join Section */}
                        <section className="px-5 py-10" id="why-join">
                            <div className="mx-auto max-w-6xl text-center md:text-left">
                                <h2 className="mb-10 text-3xl font-semibold">Why Join ChessQL?</h2>
                                <div className="flex flex-col md:flex-row md:space-x-10">
                                    <div className="flex-1">
                                        <h4 className="mb-3 text-xl font-semibold">Seamless Club Management</h4>
                                        <p className="mb-3 text-lg">Streamline your club’s activities with our intuitive tools.</p>
                                    </div>
                                    <div className="flex-1 md:text-center">
                                        <h4 className="mb-3 text-xl font-semibold">Competitive Edge</h4>
                                        <p className="mb-3 text-lg">Keep track of your progress and climb the ranks from local to national levels.</p>
                                    </div>
                                    <div className="flex-1 md:text-right">
                                        <h4 className="mb-3 text-xl font-semibold">Community Engagement</h4>
                                        <p className="mb-3 text-lg">Connect with a vibrant community of chess players and enthusiasts.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Testimonials Section */}
                        <section className="bg-white px-5 py-10 dark:bg-gray-700" id="testimonials">
                            <div className="mx-auto max-w-6xl text-center">
                                <h2 className="mb-10 text-3xl font-semibold">Testimonials</h2>
                                <div className="flex flex-col py-10 md:flex-row md:space-x-10">
                                    <div className="mb-5 flex-1 md:mb-0">
                                        <blockquote className="mb-3 text-lg italic">"ChessQL has revolutionized how we manage our tournaments. It’s a game-changer!"</blockquote>
                                        <cite className="text-xl font-semibold">- Club Admin</cite>
                                    </div>
                                    <div className="flex-1">
                                        <blockquote className="mb-3 text-lg italic">"Thanks to ChessQL, I’ve found and joined multiple clubs while traveling. It’s amazing!"</blockquote>
                                        <cite className="text-xl font-semibold">- Chess Player</cite>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action Section */}
                        <section className="bg-white px-5 py-10 dark:bg-gray-700" id="call-to-action">
                            <div className="mx-auto max-w-6xl text-center">
                                <h2 className="mb-10 text-3xl font-semibold">Ready to Join the ChessQL Community?</h2>
                                <Link
                                    href={route('register')}
                                    className="mx-auto mt-5 rounded-md bg-cyan-500 px-5 py-3 text-lg font-semibold text-white shadow-md hover:bg-cyan-600"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </section>

                        {/* Footer Section */}
                        <footer className="mt-10 border-t border-gray-300 bg-white px-5 py-4 text-center dark:border-gray-700 dark:bg-gray-900">
                            <div className="mx-auto max-w-6xl">
                                <p className="text-lg">&copy; 2024 ChessQL. All rights reserved.</p>
                                {/* <nav className="mt-3 flex justify-center space-x-4">
                                    <Link href={route('terms')} className="text-sm text-black hover:text-black/70 dark:text-white dark:hover:text-white/80">Terms</Link>
                                    <Link href={route('privacy')} className="text-sm text-black hover:text-black/70 dark:text-white dark:hover:text-white/80">Privacy</Link>
                                </nav> */}
                                <nav className="mt-3 flex justify-center space-x-4">
                                    <Link href='/terms' className="text-sm text-black hover:text-black/70 dark:text-white dark:hover:text-white/80">Terms</Link>
                                    <Link href='/privacy' className="text-sm text-black hover:text-black/70 dark:text-white dark:hover:text-white/80">Privacy</Link>
                                </nav>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
