import React from "react";
import { Download } from "lucide-react";

import { RainbowButton } from "@/components/ui/rainbow-button1";

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileUrl,
  fileName,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <><RainbowButton onClick={handleDownload} variant="secondary" className="gap-x-2">
      Get Cv <Download size={18} />
    </RainbowButton></>
  );
};

export default DownloadButton;
