import Link from '@docusaurus/Link';

export const Card = ({ children, link }) => {
  return (
    <Link to={link} className="bg-adaptable-green p-8 rounded-2xl text-off-white !text-white !no-underline transition-all border-solid border border-gray-500 hover:border-smart-neon duration-1000 font-normal">
      {children}
    </Link>
  );
};


