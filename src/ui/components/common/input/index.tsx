import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  renderAccessory?: () => JSX.Element;
  errorMessage?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  renderAccessory,
  errorMessage,
  ...rest
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative flex items-center">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          {...rest}
        />
        {renderAccessory && (
          <div className="absolute right-2">{renderAccessory()}</div>
        )}
      </div>
      {errorMessage && (
        <span className="text-sm text-red ">{errorMessage}</span>
      )}
    </div>
  );
};
