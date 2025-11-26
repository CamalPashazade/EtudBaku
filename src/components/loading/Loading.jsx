import React from "react";
import { Loader2 } from "lucide-react"; // ikon (lucide-react kitabxanasından)
import './loading.css'; // animasiya üçün stil faylı (aşağıda əlavə edəcəyik)

const Loading = ({ text = "Yüklənir..." }) => {
  return (
    <div className="loading-container">
      <Loader2 className="loading-icon" />
      <p>{text}</p>
    </div>
  );
};

export default Loading;