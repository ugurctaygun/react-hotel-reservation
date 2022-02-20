function DatePicker({ label, htmlFor, name }) {
  return (
    <div className="o-input__field">
      <label htmlFor={htmlFor}>{label} :</label>

      <input
        type="date"
        id={htmlFor}
        name={name}
        min={new Date().toISOString().slice(0, 10)}
      />
    </div>
  );
}

export default DatePicker;
