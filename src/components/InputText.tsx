interface InputTextProps {
  type: "text" | "email";
  placeholder: string;
}

const InputText = ({ type, placeholder }: InputTextProps) => {
  return <input type={type} placeholder={placeholder} />;
};

export default InputText;
