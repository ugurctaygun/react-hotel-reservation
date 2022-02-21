function DatePicker({ label, htmlFor, name, onChange, value }) {
  return (
    <div className="o-input__field">
      <label htmlFor={htmlFor}>{label} :</label>

      <input
        type="date"
        id={htmlFor}
        name={name}
        min={new Date().toISOString().slice(0, 10)}
        onChange={onChange}
        value={value ? value : ""}
      />
    </div>
  );
}

export default DatePicker;
