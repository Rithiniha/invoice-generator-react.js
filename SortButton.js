function SortButton({ onClick, label, style, className }) {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`sort-button ${className || ''}`}
    >
      {label}
    </button>
  );
}

export default SortButton;
