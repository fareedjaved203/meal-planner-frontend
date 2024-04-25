import React from "react";
import QRCode from "qrcode";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Image from "next/image";

const DownloadQRButton = ({ ids }) => {
  const downloadQR = () => {
    const zip = new JSZip();
    const qrFolder = zip.folder("qrcodes");

    Promise.all(
      ids.map((id, index) =>
        QRCode.toDataURL(`http://localhost:3000/receipt/${id}`).then(
          (dataUrl) => {
            qrFolder.file(`receipt-qr-${index}.png`, dataUrl.split(",")[1], {
              base64: true,
            });
          }
        )
      )
    ).then(() => {
      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(content, "qrcodes.zip");
      });
    });
  };

  return (
    <div>
      <div
        className="inline-flex py-2 px-2 justify-center items-center bg-lightSky text-purpleText cursor-pointer rounded"
        onClick={downloadQR}
      >
        <Image
          src={"/scan-barcode.svg"}
          width={20}
          height={20}
          alt="image"
          priority={false}
        />
        <div
          className="ml-2 font-inter"
          style={{ fontWeight: "600", fontSize: "13px" }}
        >
          Download QR
        </div>
      </div>
    </div>
  );
};

export default DownloadQRButton;
