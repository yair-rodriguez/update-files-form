import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import FileInput from "./FileInput";
import UserInformation from "./UserInformation";

function UserDocuments(): JSX.Element {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    // eslint-disable-next-line
    // @ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <UserInformation name="Susana Arévalo" image="/profile_picture.png" />

      <div style={{ marginBottom: "2rem" }} />

      <div className="user-documents">
        <span className="user-documents--item">
          <FileInput id="ine" label="INE" accept="image/png, image/jpeg" />
        </span>

        <span className="user-documents--item">
          <FileInput
            id="documento-1"
            label="Documento 1"
            accept="image/png, image/jpeg"
          />
        </span>

        <span className="user-documents--item">
          <FileInput
            id="documento-2"
            label="Documento 2"
            accept="image/png, image/jpeg"
          />
        </span>

        <span className="user-documents--item">
          <FileInput
            id="documento-3"
            label="Documento 3"
            accept="image/png, image/jpeg"
          />
        </span>
      </div>

      <div style={{ marginBottom: "2rem" }} />

      {/* <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />} */}

      <p className="text-center">Revisa que tus documentos sean claros y legibles.</p>
    </>
  );
}

export default UserDocuments;
