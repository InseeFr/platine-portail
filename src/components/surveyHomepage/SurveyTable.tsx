import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys, useTranslation } from "i18n";
import { useState } from "react";
import { QuestioningPagination } from "./QuestioningPagination";
import type { APISchemas } from "types/apiPortail";
import { SurveyTableRow } from "./SurveyTableRow";

type Props = {
  title: string;
  questionings: APISchemas["QuestionnaireDto"][];
  hasSingleSurveyUnit: boolean;
};

export const SurveyTable = ({ title, questionings, hasSingleSurveyUnit }: Props) => {
  const { t } = useTranslation("SurveyTable");
  const [sortedQuestionings, setSortedQuestionings] = useState(questionings ?? []);
  const [sortDirection, setSortDirection] = useState("asc");
  const [isSorted, setIsSorted] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the elements to be displayed on the current page
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = sortedQuestionings.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedQuestionings.length / 10);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const sortIcon = !isSorted
    ? "fr-icon-arrow-up-down-line"
    : sortDirection === "asc"
      ? "fr-icon-arrow-up-line"
      : "fr-icon-arrow-down-line";

  const handleSort = () => {
    let newDirection = sortDirection;

    if (!isSorted) {
      newDirection = "asc";
      setIsSorted(true);
    } else {
      newDirection = sortDirection === "asc" ? "desc" : "asc";
    }

    const sorted = [...sortedQuestionings].sort((questioningA, questioningB) => {
      const identificationNameA = questioningA.surveyUnitIdentificationName;
      const identificationNameB = questioningB.surveyUnitIdentificationName;

      if (
        (identificationNameA === "" && identificationNameB === "") ||
        (identificationNameA == null && identificationNameB == null)
      )
        return 0;
      if (identificationNameA == null || identificationNameA === "") return 1;
      if (identificationNameB == null || identificationNameB === "") return -1;

      return newDirection === "asc"
        ? identificationNameA.toLowerCase().localeCompare(identificationNameB.toLowerCase())
        : identificationNameB.toLowerCase().localeCompare(identificationNameA.toLowerCase());
    });

    setSortedQuestionings(sorted);
    setSortDirection(newDirection);
    setCurrentPage(1);
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
                              className={fr.cx(sortIcon, "fr-icon--sm")}
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
                  {currentItems.map(questioning => (
                    <SurveyTableRow
                      key={`${questioning.surveyUnitId}-${questioning.partitioningId}`}
                      hasSingleSurveyUnit={hasSingleSurveyUnit}
                      questioning={questioning}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {questionings.length > 10 && (
        <QuestioningPagination
          totalPages={totalPages}
          defaultPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
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
  | "go to survey"
  | "download deposit proof"
  | "RECEIVED"
  | "NOT_RECEIVED"
  | "INCOMING"
  | "OPEN"
  | "pagination label"
  | "dowloadLabel"
>()("SurveyTable");

export type I18n = typeof i18n;
