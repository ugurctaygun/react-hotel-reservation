function GuestNumberPicker({
  label,
  htmlFor,
  name,
  maxNumberAllowed,
  valid,
  onChange,
  value,
}) {
  return (
    <div className="o-input__field">
      <label htmlFor={htmlFor}>{label} :</label>
      {valid ? (
        <input
          type="number"
          id={htmlFor}
          name={name}
          min="0"
          max={maxNumberAllowed}
          placeholder="0"
          onChange={onChange}
          value={value ? value : ""}
        />
      ) : (
        <>
          <input
            type="number"
            id={htmlFor}
            name={name}
            disabled
            placeholder="0"
            onChange={onChange}
          />{" "}
          <p className="o-input__error">
            *Otel şu anda çocuk misafir kabul etmemektedir.
          </p>
        </>
      )}
    </div>
  );
}

export default GuestNumberPicker;
