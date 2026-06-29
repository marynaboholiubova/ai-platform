import styles from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <input className={styles.input} {...props} />
    </label>
  );
}