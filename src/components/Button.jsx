const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 font-montserrat text-lg px-7 py-4 rounded-full border leading-none
      ${fullWidth && "w-full"}
      ${backgroundColor || "bg-coral-red"}
      ${textColor || "text-white"}
      ${borderColor || "border-coral-red"}`}
    >
      {label}
      {iconUrl && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconUrl}
          alt="arrow right"
        />
      )}
    </button>
  );
};

export default Button;
