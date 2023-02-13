import Button from "./Button";

export default function Auxpad({ handleClick }) {
  return (
    <div>
      <div className="row auxpad">
        <Button handleClick={handleClick} value="AC" />
        <Button handleClick={handleClick} value="+/-" />
        <Button handleClick={handleClick} value="%" />
      </div>
    </div>
  );
}