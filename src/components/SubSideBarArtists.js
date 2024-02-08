import Link from "./Links";

function SubSideBarArtists(params) {
  const links = [
    { label: "Ever Since", path: "/eversinceartists" },
    { label: "Last 4 Weeks", path: "/last4weeksartists" },
    { label: "Last 6 Months", path: "/last6monthsartists" },
    { label: "Last Year", path: "/lastyearartists" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        activeClassName="font-bold border-b-2 border-orange-500 pl-2"
        className="mb-20 font-bold"
        key={link.label}
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="bg-transparent pt-3 align-middle text-sm fixed top-20 left-0 right-0 mt-6 flex justify-around h-12">
      {renderedLinks}
    </div>
  );
}

export default SubSideBarArtists;
