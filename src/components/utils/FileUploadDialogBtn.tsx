import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function useFileUploadDialogBtn() {
  const [localFilePath, setLocalFilePath] = useState("");
  const [file, setFile] = useState<File>();

  const FileUploadbtn = () => (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput
        onChange={(e) => {
          if (!e.target || !e.target.files || !e.target.files[0]) return;

          console.log(
            "lfp: ",
            e.target.value,
            "\n",
            "file : ",
            e.target.files[0]
          );
          const fileData = e.target.files[0];
          setLocalFilePath(e.target.value);
          setFile(fileData);
        }}
        type="file"
      />
    </Button>
  );

  return { FileUploadbtn, file, localFilePath };
}
