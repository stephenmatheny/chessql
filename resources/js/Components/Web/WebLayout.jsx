import WebNavigation from "./WebNavigation";
import WebPageHeader from "./WebPageHeader";

const WebLayout = ({ user, children }) => {
    return (
        <div className="hidden sm:flex justify-start min-h-screen bg-cyan-100 dark:bg-cyan-900">
            <WebNavigation />

            <div className="flex flex-col size-full">
                <WebPageHeader user={user} />

                <main>{children}</main>
            </div>


        </div>
    );
}

export default WebLayout;
