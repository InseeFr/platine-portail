import { fr } from "@codegouvfr/react-dsfr";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import Button from "@codegouvfr/react-dsfr/Button";
import { declareComponentKeys, useTranslation } from "i18n/i18n";
import type { SurveyData } from "types/ContentSurvey";

type Props = {
  data: SurveyData;
  message: string;
};

export const ErrorPage = ({ data, message }: Props) => {
  const { t } = useTranslation("ErrorPages");

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
            label: data.titleShort,
            linkProps: {
              to: "/mes-enquetes/$survey/introduction",
              params: { survey: data.id },
            },
          },
        ]}
      />
      <div id="content" className="fr-grid-row fr-grid-row--center ">
        <div
          className="fr-col-md-10 fr-col-lg-6 fr-col-12 fr-mt-3w fr-mb-3w "
          style={{
            backgroundColor: fr.colors.decisions.background.default.grey.hover,
          }}
        >
          <div className="fr-grid-row  fr-grid-row--center fr-py-md-7w fr-py-3w">
            <Alert
              className="fr-col-11 fr-col-md-8"
              description={
                <p className="fr-text--sm">
                  {message}
                  <br />
                  {t("alertText")}
                  <Button
                    className="fr-pl-1v fr-text--sm"
                    style={{
                      padding: 0,
                      display: "inline",
                      textDecoration: "underline",
                      fontWeight: "400",
                    }}
                    priority="tertiary no outline"
                    linkProps={{
                      to: "/mes-enquetes/$survey/contacter-assistance",
                      params: {
                        survey: data.id,
                      },
                    }}
                  >
                    {t("contactSupport")}
                  </Button>
                </p>
              }
              severity="error"
              title={t("alertTitle")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const { i18n } = declareComponentKeys<"connexion" | "alertTitle" | "contactSupport" | "alertText">()(
  "ErrorPages",
);

export type I18n = typeof i18n;
