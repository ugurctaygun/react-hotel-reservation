function DatePicker({ label, htmlFor, name, onChange }) {
  return (
    <div className="o-input__field">
      <label htmlFor={htmlFor}>{label} :</label>

      <input
        type="date"
        id={htmlFor}
        name={name}
        min={new Date().toISOString().slice(0, 10)}
        onChange={onChange}
      />
    </div>
  );
}

export default DatePicker;
