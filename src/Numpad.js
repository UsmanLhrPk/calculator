import Button from "./Button";

export default function Numpad({ handleClick }) {
  return (
    <div>
      <div className="row">
        <Button handleClick={handleClick} value="7" />
        <Button handleClick={handleClick} value="8" />
        <Button handleClick={handleClick} value="9" />
      </div>
      <div className="row">
        <Button handleClick={handleClick} value="4" />
        <Button handleClick={handleClick} value="5" />
        <Button handleClick={handleClick} value="6" />
      </div>
      <div className="row">
        <Button handleClick={handleClick} value="1" />
        <Button handleClick={handleClick} value="2" />
        <Button handleClick={handleClick} value="3" />
      </div>
      <div className="row">
        <div className="col-2">
          <Button handleClick={handleClick} value="0"/>
        </div>
        <Button handleClick={handleClick} value="." />
      </div>
    </div>
  );
}