import "./Element.css";

export default function Element(props) {
  const { element } = props;
  return <span className="element">{element}</span>;
}
