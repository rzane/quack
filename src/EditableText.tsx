import React from "react";
import AutosizeInput from "react-input-autosize";

export interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const onMount = (el: HTMLInputElement | null) => {
  el?.focus();
  el?.select();
};

export const EditableText: React.FC<EditableTextProps> = (props) => {
  const { value, className, onChange, disabled } = props;
  const [isEditing, setEditing] = React.useState(false);

  const onClick = React.useCallback(() => {
    if (!disabled) setEditing(true);
  }, [disabled]);

  const onBlur = React.useCallback(() => setEditing(false), []);
  const onInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  const onSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setEditing(false);
    },
    []
  );

  if (!isEditing) {
    return (
      <span onClick={onClick} className={className}>
        {value}
      </span>
    );
  }

  return (
    <form style={{ display: "inline" }} onSubmit={onSubmit}>
      <AutosizeInput
        type="text"
        value={value}
        inputRef={onMount}
        onChange={onInput}
        onBlur={onBlur}
      />
    </form>
  );
};
