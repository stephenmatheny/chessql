import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateChessClubInformationForm({ auth, club, users, className = '' }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: club.name,
        country: club.country,
        city: club.city,
        state: club.state,
        zip: club.zip,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('club.update', club.id));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-cyan-900 dark:text-cyan-100">Club Information</h2>
                <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-400">
                    Update your club's information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Club Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="country" value="Country" />
                    <TextInput
                        id="country"
                        name="country"
                        value={data.country}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('country', e.target.value)}
                        required
                    />
                    <InputError message={errors.country} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="city" value="City" />
                    <TextInput
                        id="city"
                        name="city"
                        value={data.city}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('city', e.target.value)}
                        required
                    />
                    <InputError message={errors.city} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="state" value="State" />
                    <TextInput
                        id="state"
                        name="state"
                        value={data.state}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('state', e.target.value)}
                        required
                    />
                    <InputError message={errors.state} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="zip" value="ZIP Code" />
                    <TextInput
                        id="zip"
                        name="zip"
                        value={data.zip}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('zip', e.target.value)}
                        required
                    />
                    <InputError message={errors.zip} className="mt-2" />
                </div>

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
