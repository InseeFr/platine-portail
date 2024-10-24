import { fr } from "@codegouvfr/react-dsfr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { useFetchQueryPortail } from "hooks/useFetchQuery";
import { useTranslation } from "i18n/i18n";
import { declareComponentKeys } from "i18nifty";
import content from "resources/content.json";
import { UnknownEmailForm } from "./UnknownEmailForm";
import { KnownEmailForm } from "./KnownEmailForm";
import Divider from "@mui/material/Divider";
import { Loading } from "./surveyHomepage/Loading";

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
    <div className={"fr-container"}>
      <Breadcrumb
        currentPageLabel={t("connexion")}
        className="fr-mb-0"
        homeLinkProps={{
          to: "/",
        }}
        segments={[
          {
            label: titleShort,
            linkProps: {
              to: "/$survey/introduction",
              params: { survey: surveyId },
            },
          },
        ]}
      />
      <div id="content" className="fr-grid-row fr-grid-row--center ">
        <div
          className="fr-col-md-10 fr-col-lg-7 fr-col-12 fr-mt-3w fr-mb-3w "
          style={{
            backgroundColor: fr.colors.decisions.background.default.grey.hover,
          }}
        >
          <div className="fr-grid-row  fr-grid-row--center fr-py-md-7w fr-py-3w">
            <div className="fr-col-11 fr-col-md-9 ">
              {unknownEmail ? (
                <UnknownEmailForm questioningUrl={questioningUrl} />
              ) : (
                <KnownEmailForm questioningUrl={questioningUrl} email={emailData.mail!} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
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
