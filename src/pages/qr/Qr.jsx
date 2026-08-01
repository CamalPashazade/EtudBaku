import { useEffect } from "react";

function Qr() {
  useEffect(() => {
    window.location.href = "/menupdf/etudmenu.pdf";
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "20px",
      }}
    >
      Opening Menu...
    </div>
  );
}

export default Qr;