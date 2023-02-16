import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

function FileInput(props: Props): JSX.Element {
  const { label, ...inputProps } = props;
  return (
    <div className="file-input">
      <label className="file-input--label">
        {label}
        <input
          type="file"
          id={inputProps.id}
          name={inputProps.name}
          className="file-input--input"
          {...inputProps}
        />
      </label>

      {/* <caption className="file-input--caption">
        No se ha seleccionado un archivo
      </caption> */}
    </div>
  );
}

export default FileInput;
