
const List: FC = ({ width, height, visibility, text, onClick }) => {
  const containerStyles = {
    width: width || '100px',
    height: height || '50px',
    display: visibility ? 'block' : 'none',
    backgroundColor: 'lightblue',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyles} onClick={onClick}>
      {text || 'Custom List Component'}
    </div>
  );
};

export default List;