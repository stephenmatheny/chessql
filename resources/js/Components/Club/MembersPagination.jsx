import PaginationLink from "../PaginationLink";

export default function MembersPagination({ users }) {
    return (
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
    )
}
