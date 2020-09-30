import React from "react";

export interface EditableImageProps {
  alt: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export const EditableImage: React.FC<EditableImageProps> = (props) => {
  const { value, alt, onChange, className, disabled } = props;

  const onChooseFile = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files![0];
      onChange(URL.createObjectURL(file));
    },
    [onChange]
  );

  return (
    <label className={className}>
      <img src={value} alt={alt} />
      <input
        type="file"
        disabled={disabled}
        onChange={onChooseFile}
        style={{ display: "none" }}
      />
    </label>
  );
};
