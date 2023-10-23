import styles from '../../styles/calculator/calculator.module.css';

interface Props {
  label?: string;
  placeholder: string;
  id: string;
  measurment: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputField({
  label,
  placeholder,
  id,
  onInputChange,
  measurment,
}: Props) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        className={styles.textInput}
        onChange={onInputChange}
      />
      <span className={styles.measurment}>{measurment}</span>
    </div>
  );
}

export default InputField;
