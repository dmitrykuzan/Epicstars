export const Input = (props) => {
  //**props
  const { type, placeholder, className, name, register, validationRules } =
    props;

  // RegExp Numeric
  const numericRegex = /^[0-9]*$/;

  //handleInput phone
  const handleInput = (e) => {
    const inputValue = e.target.value;

    if (name === "tel" && !numericRegex.test(inputValue)) {
      e.target.value = inputValue.replace(/[^0-9]/g, "");
    }
  };

  return (
    <div className={className ? `input ${className}` : "input"}>
      <input
        {...register(name, validationRules)}
        type={type}
        placeholder={placeholder}
        name={name}
        onInput={handleInput}
      />
    </div>
  );
};
