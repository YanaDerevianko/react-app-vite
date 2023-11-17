import css from "./Warning.module.css";

export const Warning = ({children}) => {
  return (
    <p className={css.warning}>{children}</p>
  )
}
