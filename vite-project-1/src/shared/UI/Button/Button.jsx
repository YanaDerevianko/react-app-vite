import css from "./Button.module.css";

export const Button = ({
  children,
  type,
  onClick,
  disabled,
  backgroundColor = "lime",
  width
}) => {
  return (
    <button
      className={css.button}
      style={{ backgroundColor, width }}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
