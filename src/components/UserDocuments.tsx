import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import FileInput from "./FileInput";
import Modal from "./Modal";
import UserInformation from "./UserInformation";

function UserDocuments(): JSX.Element {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const capture = useCallback(() => {
    // eslint-disable-next-line
    // @ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  function handleClick() {
    setModalOpen(!isModalOpen);
  }

  const videoConstraints = {
    width: 1280 / 2,
    height: 720 / 2,
    facingMode: "user",
  };

  return (
    <>
      <UserInformation name="Susana Arévalo" image="/profile_picture.png" />

      <div style={{ marginBottom: "2rem" }} />

      <div className="user-documents">
        <span className="user-documents--item">
          <button type="button" onClick={handleClick}>
            INE
          </button>
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

      <p className="text-center">
        Revisa que tus documentos sean claros y legibles.
      </p>

      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Firma de contrato"
        content={
          <div className="selfie">
            <div className="selfie--content">
              <div className="selfie--status">
                <h6 className="my-0">Rodolfo está firmando</h6>
              </div>
              <div className="selfie--instructions">
                <h5 className="my-0">Coloca dentro del margen tu rostro</h5>
              </div>

              <div className="selfie--preview">
                {imgSrc ? (
                  <img src={imgSrc} />
                ) : (
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                  />
                )}
              </div>

              {imgSrc && (
                <div className="selfie--success-message">
                  <i className="material-symbols-outlined text-complementary-orange">
                    check_circle
                  </i>

                  <h4>Bien</h4>

                  <h5>¡Has tomado exitosamente tu foto!</h5>
                </div>
              )}

              <div className="selfie--actions">
                {imgSrc ? (
                  <>
                    <button
                      type="button"
                      className="contained complementary-blue-1 rounded mx-auto"
                    >
                      Continuar
                    </button>
                    <button
                      type="button"
                      className="mx-auto"
                      onClick={() => setImgSrc(null)}
                    >
                      Repetir
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="contained primary mx-auto circle"
                    style={{ width: 56, height: 56 }}
                    onClick={capture}
                  >
                    <i className="material-symbols-outlined">
                      photo_camera
                    </i>
                  </button>
                )}
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}

export default UserDocuments;
