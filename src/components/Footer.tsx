import { Link } from "react-router-dom";

export function Footer() {
  const staticLinks = [
    { link: "about", title: "About" },
    { link: "sitemap", title: "Sitemap" },
    { link: "contact", title: "Contact Us" },
    { link: "faq", title: "FAQ" },
  ];
  const contentLinks = [
    { link: "/", title: "Blog" },
    { link: "/authors", title: "Authors" },
  ];
  return (
    <div className="container mt-5 mb-5">
      [FOOTER]
      <div className="row">
        <div className="col">
          <ul className="list-group">
            <li className="list-group-item list-group-item-light">Static</li>
            {staticLinks.map((link) => (
              <li
                key={link.link}
                className="list-group-item list-group-item-secondary"
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <ul className="list-group">
            <li className="list-group-item list-group-item-light">Content</li>
            {contentLinks.map((link) => (
              <li
                key={link.link}
                className="list-group-item list-group-item-secondary"
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
