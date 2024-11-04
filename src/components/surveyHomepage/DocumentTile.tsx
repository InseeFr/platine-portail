import { useEffect, useState } from "react";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import { fr } from "@codegouvfr/react-dsfr";

type Props = {
  title: string;
  description: string;
  url: string;
  pictogramUrl: string;
};

export const DocumentTile = ({ title, description, url, pictogramUrl }: Props) => {
  const [file, setFile] = useState<{
    extension: string | undefined;
    size: number | null;
    isDownloadable: boolean;
  }>({
    extension: undefined,
    size: null,
    isDownloadable: false,
  });

  useEffect(() => {
    const fetchFileInfo = async () => {
      try {
        const response = await fetch(url, { method: "HEAD" });

        if (response.ok) {
          const size = response.headers.get("Content-Length");
          const extension = url.split(".").pop();

          setFile({
            extension: extension,
            size: size ? parseInt(size) : null,
            isDownloadable: size ? true : false,
          });
        } else {
          console.error("Error retrieving file information");
          setFile({ ...file, isDownloadable: false });
        }
      } catch (error) {
        console.error("Error : ", error);
      }
    };

    fetchFileInfo();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.setAttribute("data-fr-assess-file", "bytes");
    link.href = url;
    link.download = getFileName(url, file.extension);
    link.click();
  };

  if (!file.isDownloadable) {
    return <></>;
  }

  return (
    <div className="container">
      <Tile
        desc={description}
        className="fr-mb-3w"
        detail={
          <p style={{ "color": fr.colors.decisions.text.mention.grey.default }} className="fr-text--xs">
            {`${file.extension && `${file.extension.toLocaleUpperCase()} - `} ${file.size && (file.size / 1024).toFixed(0)} Ko`}
          </p>
        }
        imageSvg
        enlargeLinkOrButton
        buttonProps={{ onClick: handleDownload }}
        downloadButton
        imageUrl={pictogramUrl}
        orientation="horizontal"
        small
        title={title}
        titleAs="h4"
      />
    </div>
  );
};

const getFileName = (url: string, extension?: string) => {
  if (url.includes("courrier")) {
    return `courrier.${extension}`;
  }
  if (url.includes("mail")) {
    return `mail.${extension}`;
  }
  if (url.includes("questionnaire")) {
    return `questionnaire.${extension}`;
  }
  if (url.includes("notice")) {
    return `notice.${extension}`;
  }

  return `ressource.${extension}`;
};
