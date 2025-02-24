import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys, useTranslation } from "i18n";
import { useState } from "react";

type Props = {
  title: string;
  questionings: any;
  hasSingleSurveyUnit: boolean;
};

export const SurveyTable = ({ title, questionings, hasSingleSurveyUnit }: Props) => {
  const { t } = useTranslation("SurveyTable");
  const [sortedQuestionings, setSortedQuestionings] = useState(questionings);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";

    const sorted = [...sortedQuestionings].sort((a, b) => {
      if (a.identificationName < b.identificationName) return newDirection === "asc" ? -1 : 1;
      if (a.identificationName > b.identificationName) return newDirection === "asc" ? 1 : -1;
      return 0;
    });

    setSortedQuestionings(sorted);
    setSortDirection(newDirection);
  };

  return (
    <div className={fr.cx("fr-container")} id="table">
      <div
        className={fr.cx("fr-table--lg", "fr-table", "fr-col-offset-md-1", "fr-col-md-10")}
        id="table-lg-component"
      >
        <div className={fr.cx("fr-table__wrapper")}>
          <div className={fr.cx("fr-table__container")}>
            <div className={fr.cx("fr-table__content")}>
              <table id="table-lg">
                <caption>{`${t("respond to the survey")} ${title}`}</caption>
                <thead>
                  <tr>
                    {!hasSingleSurveyUnit && (
                      <>
                        <th scope="col">{t("survey unit")}</th>
                        <th scope="col" onClick={handleSort} style={{ cursor: "pointer" }}>
                          <div className="fr-grid-row fr-grid-row--center fr-grid-row--between">
                            <p className={fr.cx("fr-col")}>{t("identification name")}</p>
                            <p
                              style={{ color: fr.colors.decisions.text.title.blueFrance.default }}
                              className={fr.cx("fr-icon-arrow-up-down-line", "fr-icon--sm")}
                              aria-label={t("sort")}
                            ></p>
                          </div>
                        </th>
                      </>
                    )}
                    <th scope="col">{t("questionings")}</th>
                    <th scope="col">{t("status")}</th>
                    <th scope="col">{t("action")}</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedQuestionings.map((questioning: any) => (
                    <tr
                      style={{ height: "70px" }}
                      key={`${questioning.identificationCode}-${questioning.questioning}`}
                    >
                      {!hasSingleSurveyUnit && (
                        <>
                          <td>{questioning.identificationCode}</td>
                          <td>{questioning.identificationName}</td>
                        </>
                      )}
                      <td>{questioning.questioning}</td>
                      <td>{questioning.status}</td>
                      <td>TODO action</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const { i18n } = declareComponentKeys<
  | "respond to the survey"
  | "survey unit"
  | "identification name"
  | "sort"
  | "questionings"
  | "status"
  | "action"
  | "goToSurvey"
  | "download deposit proof"
>()("SurveyTable");

export type I18n = typeof i18n;
