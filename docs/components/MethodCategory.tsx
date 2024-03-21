export const MethodCategory = ({ name, description }) => {
  const id = name.toLowerCase();

  return <div>
    <h2 id={id}>{name}</h2>
    <p>{description}</p>
  </div>
}

