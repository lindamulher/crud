import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type SetStateAction<S> = S | ((prevState: S) => S);

type Dispatch<A> = (action: A) => void;
interface ICampoTexto {
  placeholder?: string;
  value?: string | boolean | number;
  onChange?(event: any): void;
  type?: string;
  obrigatorio?: boolean;
  isPassword?: boolean;
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
  showPassword?: boolean;
}

function CampoTexto({
  onChange,
  placeholder,
  type,
  value,
  obrigatorio,
  isPassword,
  showPassword,
  setShowPassword,
}: ICampoTexto) {
  return (
    <div className="bg-[#f2f1f6] w-full flex rounded py-2 px-3 items-center justify-between">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={obrigatorio}
        onChange={onChange}
        className="outline-none flex-1 bg-transparent"
      />
      {isPassword && (
        <div onClick={() => setShowPassword!(!showPassword)}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
      )}
    </div>
  );
}

export default CampoTexto;
