import Button from "./Button";

export default function Oppad({ handleClick }) {
  return (
    <div className='oppad'>
      <div className="col">
        <Button handleClick={handleClick} value="&#247;" />
        <Button handleClick={handleClick} value="&times;"/>
        <Button handleClick={handleClick} value="-"/>
        <Button handleClick={handleClick} value="+"/>
        <Button handleClick={handleClick} value="="/>
      </div>
    </div>
  );
}