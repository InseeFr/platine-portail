import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { DocumentTile } from "components/surveyHomepage/DocumentTile";
import { declareComponentKeys, useTranslation } from "i18n/i18n";

export const Route = createFileRoute("/$survey/documents")({
  component: DocumentsIndex,
});

function DocumentsIndex() {
  const { survey } = Route.useParams();
  const { t: homeTranslation } = useTranslation("SurveyHomepage");
  const { t } = useTranslation("Documents");

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <h3>{homeTranslation("documents to the surveyed")}</h3>
      <div>
        <DocumentTile
          title={t("downloadEMail")}
          description={t("downloadEMailDescription")}
          url={`/documents/${survey}/mail.pdf`}
          pictogramUrl={"/static/img/mail-send.svg"}
        />
        <DocumentTile
          title={t("downloadEMail")}
          description={t("downloadEMailDescription")}
          url={`/documents/${survey}/mail.png`}
          pictogramUrl={"/static/img/mail-send.svg"}
        />
        <DocumentTile
          title={t("downloadInstructions")}
          description={t("downloadInstructionsDescription")}
          url={`/documents/${survey}/notice.pdf`}
          pictogramUrl={"/static/img/document-download.svg"}
        />
        <DocumentTile
          title={t("downloadInstructions")}
          description={t("downloadInstructionsDescription")}
          url={`/documents/${survey}/notice.png`}
          pictogramUrl={"/static/img/document-download.svg"}
        />
        <DocumentTile
          title={t("downloadQuestioning")}
          description={t("downloadQuestioningDescription")}
          url={`/documents/${survey}/questionnaire.pdf`}
          pictogramUrl={"/static/img/document-signature.svg"}
        />
        <DocumentTile
          title={t("downloadQuestioning")}
          description={t("downloadQuestioningDescription")}
          url={`/documents/${survey}/questionnaire.png`}
          pictogramUrl={"/static/img/document-signature.svg"}
        />
        <DocumentTile
          title={t("downloadMail")}
          description={t("downloadMailDescription")}
          url={`/documents/${survey}/courrier.pdf`}
          pictogramUrl={"/static/img/document.svg"}
        />
        <DocumentTile
          title={t("downloadMail")}
          description={t("downloadMailDescription")}
          url={`/documents/${survey}/courrier.png`}
          pictogramUrl={"/static/img/document.svg"}
        />
      </div>
    </section>
  );
}

const { i18n } = declareComponentKeys<
  | "downloadEMail"
  | "downloadEMailDescription"
  | "downloadInstructions"
  | "downloadInstructionsDescription"
  | "downloadQuestioning"
  | "downloadQuestioningDescription"
  | "downloadMail"
  | "downloadMailDescription"
>()("Documents");

export type I18n = typeof i18n;
