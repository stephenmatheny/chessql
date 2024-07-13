import PageHeader from "../Dynamic/PageHeader";
import WebNavigation from "./WebNavigation";

const WebLayout = ({ user, children }) => {
    return (
        <div className="hidden sm:flex justify-start min-h-screen bg-cyan-100 dark:bg-cyan-900">
            <WebNavigation />

            <div className="flex flex-col size-full">
                <PageHeader user={user} />

                <main className="flex-grow">{children}</main>
            </div>


        </div>
    );
}

export default WebLayout;
