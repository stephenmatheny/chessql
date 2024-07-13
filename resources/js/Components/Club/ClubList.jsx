import PaginationLink from "../PaginationLink";
import ClubCard from "./ClubCard";

export default function ClubList({ clubs }) {
    return (
        <>
            {clubs.data.map(club => {
                return <ClubCard key={club.id} club={club} />
            })}
            <div className="flex justify-center flex-wrap space-x-2 mt-4">
                {clubs.links.map((link, index) => (
                    <div className="sticky bottom-0">
                        <PaginationLink
                            key={index}
                            href={link.url ? link.url : "#"}
                            active={link.active}>
                            <span dangerouslySetInnerHTML={{ __html: link.label }} />
                        </PaginationLink>
                    </div>
                ))}
            </div>
        </>
    );
}
