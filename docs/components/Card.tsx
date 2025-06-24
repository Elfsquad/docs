import Link from '@docusaurus/Link';

export const Card = ({ children, link }) => {
  return (
    <Link to={link} className="card">
      <p>{children}</p>
    </Link>
  );
};


