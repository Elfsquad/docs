import { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export const MethodName = ({name, parameters}) => {
  let paramString = "";
  for (let i = 0; i < parameters.length; i++) {
    paramString += parameters[i].name;
    if (!parameters[i].required) {
      paramString += "?";
    }
    if (i < parameters.length - 1) {
      paramString += ", ";
    }
  }

  const id = name.replace(/\./g, "").toLowerCase();
  return <h3 id={id} className="sticky z-10 bg-adaptable-dark-green py-4 top-[var(--ifm-navbar-height)]">{name}({paramString})</h3>
}

export const ChildParameters = ({parameters}) => {
  const [show, setShow] = useState(false);

  if (parameters === null || parameters.length === 0) {
    return null;
  }

  const plusStyle = "text-2xl transition-transform transform duration-200 ease-in-out " + (show ? "rotate-45" : "rotate-0");
  const p = parameters.map(p => <MethodParameter key={p.name} {...p} />);

  return <div className="border border-solid border-gray-500 rounded p-2">
    <button className="cursor-pointer border-none bg-transparent flex items-center gap-2" onClick={() => setShow(!show)}>
      <span className={plusStyle}>+</span>
      <span>{show ? "Hide" : "Show"} child parameters</span>
    </button>

    {show && <div className="p-4">
      {p}
    </div>}
  </div>;
}

export const Type = ({type}) => {
  if (type === undefined) {
    return null;
  }

  return <small className="text-gray-400 ">({type})</small>;
}

export const MethodParameter = ({name, type, description, required, parameters}) => {
  if (parameters === undefined) {
    parameters = [];
  }
  if (required === undefined) {
    required = true;
  }

  const requiredComponent = required 
    ? <small className="text-red-500 uppercase tracking-tighter">required</small>
    : <small className="text-gray-500 tracking-tighter">optional</small>;

  return <div>
    <div className="flex items-baseline gap-2">
      <strong>{name}</strong> {requiredComponent} <Type type={type} />
    </div>
    {typeof description === "string" ? <p className="text-sm">{description}</p> : description}

    <ChildParameters parameters={parameters} />
  </div>
}

export const MethodParameters = ({parameters}) => {
  if (parameters.length === 0) {
    return null;
  }

  const p = parameters.map(p => <MethodParameter key={p.name} {...p} />);

  return <div className="mt-16">
    <h4>Method parameters</h4>
    <hr className="bg-gray-600" />
    {p}
  </div>
};

export const MethodReturns = ({returns}) => {
  if (returns === undefined) {
    return null;
  }

  return <div className="mt-16">
    <h4 className="mb-0">Returns <Type type={returns.type} /></h4>
    
    <hr className="bg-gray-600" />
    {typeof returns.description === "string" ? <p>{returns.description}</p> : returns.description}
  </div>
}


export const MethodDocument = ({methodName, description, code, parameters, returns}) => {
  if (parameters === undefined) {
    parameters = [];
  }

  return <div>
    <div className="grid grid-cols-2 gap-16 bg-adaptable-dark-green">
      <div>
        <MethodName name={methodName} parameters={parameters} />
        <p>{description}</p>

        <MethodParameters parameters={parameters} />
        <MethodReturns returns={returns} />
      </div>

      <div className="row-span-2">
        <CodeBlock className="sticky z-10 top-[var(--ifm-navbar-height)]" language="javascript" showLineNumbers={true}>{code}</CodeBlock>
      </div>

    </div>

  </div>;
}

