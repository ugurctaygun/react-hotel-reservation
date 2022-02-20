function GuestNumberPicker({
  label,
  htmlFor,
  name,
  minNumberAllowed,
  maxNumberAllowed,
  valid,
}) {
  return (
    <div className="o-input__field">
      <label htmlFor={htmlFor}>{label} :</label>
      {valid ? (
        <input
          type="number"
          id={htmlFor}
          name={name}
          min={minNumberAllowed}
          max={maxNumberAllowed}
          placeholder="0"
        />
      ) : (
        <>
          <input
            type="number"
            id={htmlFor}
            name={name}
            disabled
            placeholder="0"
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
