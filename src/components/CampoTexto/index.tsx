interface ICampoTexto {
  placeholder: string;
  value: string;
  onChange(event: any): void;
  type: string;
  obrigatorio: boolean;
}

function CampoTexto({
  onChange,
  placeholder,
  type,
  value,
  obrigatorio,
}: ICampoTexto) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={obrigatorio}
      onChange={onChange}
      className="px-3 py-2 rounded outline-none bg-[#f2f1f6] w-full"
    />
  );
}

export default CampoTexto;
