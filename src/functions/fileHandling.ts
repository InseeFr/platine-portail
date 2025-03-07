import { fetchDepositProof } from "./fetch";

export type FileType = {
  extension?: string;
  size?: number;
  url?: string | null;
};

export const getDetails = (file: { extension?: string; size?: number }) => {
  if (file.extension && file.size) {
    return `${file.extension.toLocaleUpperCase()} -  ${(file.size / 1024).toFixed(0)} Ko`;
  }
  if (file.extension) {
    return file.extension;
  }
  return file.size ? `${(file.size / 1024).toFixed(0)} Ko` : "";
};

export const fetchFileInfo = async (depositProofUrl?: string) => {
  if (depositProofUrl) {
    try {
      const file = await fetchDepositProof(depositProofUrl);
      const url = URL.createObjectURL(file);
      const extension = file.type.split("/").pop();

      return { extension, size: file.size, url };
    } catch (error) {
      console.error("Error while retrieving document", error);
    }
  }
};

export const handleDownload = (file: FileType) => {
  if (file.url) {
    const link = document.createElement("a");
    link.setAttribute("data-fr-assess-file", "bytes");
    link.href = file.url ?? "#";
    link.download = `document.${file.extension}}`;
    link.click();
  }
};
