import PaginationLink from "../PaginationLink";
import ClubCard from "./ClubCard";
import MemberCard from "./MemberCard";

export default function MembersList({ club, users }) {
    return (
        <>
            {users.data.map(user => {
                return <MemberCard key={user.id} user={user} />
            })}
            <div className="flex justify-center space-x-4 mt-4">
                {users.links.map((link, index) => (
                    <PaginationLink
                        key={index}
                        href={link.url ? link.url : "#"}
                        active={link.active}>
                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                    </PaginationLink>
                ))}
            </div>
        </>
    );
}
