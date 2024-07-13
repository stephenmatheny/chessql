import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'), {
            onSuccess: () => {
                setSelectedEmoji(data.emoji); // Update selectedEmoji state with the new emoji
            },
            data: {
                ...data,
                emoji: selectedEmoji, // Include selected emoji in the update request
            },
        });
    };

    const [selectedEmoji, setSelectedEmoji] = useState(user.emoji);
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

    const handleEmojiClick = (emojiData) => {
        setSelectedEmoji(emojiData.emoji);
        setIsEmojiPickerOpen(false); // Close the emoji picker modal after selection
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-cyan-900 dark:text-cyan-100">Profile Information</h2>
                <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-400">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">

                {/* Emoji Picker Modal TODO: complete this */}
                {/* <Transition
                    show={isEmojiPickerOpen}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Pick an Emoji</h3>
                                            <EmojiPicker
                                                onEmojiClick={handleEmojiClick}
                                                defaultEmoji={selectedEmoji}
                                                autoFocusSearch={true}
                                                theme="dark"
                                                emojiStyle="native"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <PrimaryButton onClick={() => setIsEmojiPickerOpen(false)}>Done</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition> */}

                {/* Display selected emoji TODO: complete this */}
                {/* <div
                    className="cursor-pointer"
                    onClick={() => setIsEmojiPickerOpen(true)}
                >
                    {selectedEmoji && (
                        <span className='text-8xl'>{selectedEmoji}</span>
                    )}
                </div> */}
                <div>

                    <InputLabel htmlFor="first_name" value="First Name" />

                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="given-name"
                        isFocused={true}
                        onChange={(e) => setData('first_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.first_name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="last_name" value="Last Name" />

                    <TextInput
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="family-name"
                        isFocused={true}
                        onChange={(e) => setData('last_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="username" value="Username" />

                    <TextInput
                        id="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Phone Number" />

                    <TextInput
                        id="phone"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="tel"
                        isFocused={true}
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-cyan-800 dark:text-logoColor">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-cyan-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-cyan-600 dark:text-cyan-400">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
