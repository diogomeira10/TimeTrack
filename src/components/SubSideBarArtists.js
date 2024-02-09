function SubSideBarArtists({setPageTimeRange}) {
  const links = [
    { label: "Ever Since", path: "/eversinceartists" },
    { label: "Last 4 Weeks", path: "/last4weeksartists" },
    { label: "Last 6 Months", path: "/last6monthsartists" },
    { label: "Last Year", path: "/lastyearartists" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <div
        onClick={() => setPageTimeRange(link.label)}
        activeClassName="font-bold border-b-2 border-orange-500"
        className="font-bold h-4 text-orange-500"
        key={link.label}
        to={link.path}
      >
        {link.label}
      </div>
    );
  });
  return (
    <div className="bg-transparent pt-3 align-middle text-xs fixed top-20 left-0 right-0 my-14 mx-4 flex justify-around h-12">
      {renderedLinks}
    </div>
  );
}

export default SubSideBarArtists;
