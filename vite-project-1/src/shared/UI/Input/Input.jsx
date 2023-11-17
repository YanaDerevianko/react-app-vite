import css from "./Input.module.css";

export const Input = ({ type, value, onChange, onBlur, placeholder }) => {
  return (
    <input
      className={css.input}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};
