/* eslint-disable react/prop-types */
const Title = (props) => {
  return (
    <h1 className={`text-slate-800 font-semibold text-4xl ${props.className}`}>
      {props.label}
    </h1>
  );
};

export default Title;
