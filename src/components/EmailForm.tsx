import { useFetchQueryPortail } from "hooks/useFetchQuery";
import { useTranslation } from "i18n/i18n";
import { declareComponentKeys } from "i18nifty";
import content from "resources/content.json";
import { UnknownEmailForm } from "./UnknownEmailForm";
import { KnownEmailForm } from "./KnownEmailForm";
import Divider from "@mui/material/Divider";
import { Loading } from "./surveyHomepage/Loading";
import { PageWithCardContainer } from "./commons/PageWithCardContainer";

export const EmailForm = ({ surveyId }: { surveyId: string }) => {
  const { t } = useTranslation("EmailForm");
  const titleShort = content.specifique.find(s => s.id === surveyId)?.titleShort;

  const { data: questioningUrlData, isLoading } = useFetchQueryPortail("/questionnaires-url");

  const questioningUrl = questioningUrlData && questioningUrlData[0].url;

  const { data: emailData, isLoading: isLoadingEmailData } = useFetchQueryPortail("/user/mail");

  if (isLoading || isLoadingEmailData) {
    return <Loading />;
  }

  const unknownEmail = !emailData || emailData.mail === "" || emailData.mail === undefined;

  return (
    <PageWithCardContainer currentPageLabel={t("connexion")} surveyId={surveyId} titleShort={titleShort}>
      {unknownEmail ? (
        <UnknownEmailForm questioningUrl={questioningUrl} surveyId={surveyId} />
      ) : (
        <KnownEmailForm questioningUrl={questioningUrl} surveyId={surveyId} email={emailData.mail!} />
      )}
      <Divider orientation="horizontal" variant="fullWidth" className="fr-p-0 fr-my-3w" />
      <p>{t("contactDetailsInformation")}</p>
      <p>{t("personalInformations")}</p>
      <a
        className="fr-link"
        title={`${t("link")} - ${t("openNewWindow")}`}
        href={"https://www.insee.fr/fr/information/3719162"}
        target="_blank"
      >
        {t("link")}
      </a>
    </PageWithCardContainer>
  );
};

const { i18n } = declareComponentKeys<
  | "connexion"
  | "contactDetailsInformation"
  | "personalInformations"
  | "link"
  | "openNewWindow"
  | "unknownEmailFormtitle"
  | "email"
  | "confirmEmail"
  | "submitUnknownEmailForm"
  | "knownEmailFormtitle"
  | "submitKnownEmailForm"
  | "pageTitle"
>()("EmailForm");

export type I18n = typeof i18n;
