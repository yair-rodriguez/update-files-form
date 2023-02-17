interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element;
}

function Modal(props: Props): JSX.Element {
  const { open, onClose, title, content } = props;

  if (!open) return <></>;

  return (
    <div className="modal">
      <div className="modal--content">
        <div className="modal--header">
          <div style={{ flex: 1 }} />
          <span style={{ marginLeft: 56 }}>{title}</span>
          <div style={{ flex: 1 }} />
          <button
            type="button"
            className="contained primary"
            onClick={onClose}
          >
            <i className="material-symbols-outlined">
              close
            </i>
          </button>
        </div>
        <div className="modal--body">
          {content}
        </div>
      </div>
    </div >
  );
}

export default Modal;