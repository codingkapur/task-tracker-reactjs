import Button from './Button';

function Header({onAdd}) {
  return (
    <div className="header-container">
      <h1>TASK TRACKER</h1>
      <Button text='Add' onClick={onAdd} />
    </div>
  );
}

export default Header;
