import styles from '../../styles/calculator/calculator.module.css';

interface Props {
  label?: string;
  placeholder: string;
  id: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputField({ label, placeholder, id, onInputChange }: Props) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        className={styles.textInput}
        onChange={onInputChange}
      />
    </div>
  );
}

export default InputField;
