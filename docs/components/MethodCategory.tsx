export const MethodCategory = ({ name, description }) => {
  const id = name.toLowerCase();

  return <div>
    <h2 id={id}>{name}</h2>
    <p>{description}</p>
    <hr className="bg-gray-600" />
  </div>
}

