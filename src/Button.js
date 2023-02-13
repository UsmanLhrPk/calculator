export default function Button({ value, handleClick }) {
  return (
    <button className='numpad-button' onClick={handleClick} value={value}>{value}</button>
  );
}