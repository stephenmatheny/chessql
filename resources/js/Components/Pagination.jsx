export default function Pagination(clubs) {
  return (
    <>
        {clubs.links.map((link, index) => (
            <a
                key={index}
                href={link.url}
                className={`mx-1 px-4 py-2 border rounded-lg ${
                    link.active
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-blue-500 border-gray-300'
                } ${!link.url ? 'pointer-events-none text-gray-400' : ''}`}
                dangerouslySetInnerHTML={{ __html: link.label }}
            />
        ))}
    </>
  )
}
