import PaginationLink from "../PaginationLink";
import MemberCard from "./MemberCard";

export default function MembersList({ users }) {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 px-4">
                {users.data.map(user => {
                    return <MemberCard key={user.id} user={user} />
                })}
            </div>
            <div className="flex justify-center flex-wrap space-x-2 mt-4">
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
