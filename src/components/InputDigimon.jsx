export const InputDigimon = ({ value, handleOnChange, handleKeyDown }) => {
  return (
    <div className="input-digimon">
      <input
        type="text"
        placeholder="¿Qué compañero Digimon buscas?"
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
