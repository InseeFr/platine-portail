import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys, useTranslation } from "i18n";
import { useState } from "react";
import { QuestioningStatus } from "./QuestioningStatus";
import { Download } from "@codegouvfr/react-dsfr/Download";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { QuestioningPagination } from "./QuestioningPagination";

type Props = {
  title: string;
  questionings: any;
  hasSingleSurveyUnit: boolean;
};

export const SurveyTable = ({ title, questionings, hasSingleSurveyUnit }: Props) => {
  const { t } = useTranslation("SurveyTable");
  const [sortedQuestionings, setSortedQuestionings] = useState(questionings);
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

    const sorted = [...sortedQuestionings].sort((a, b) => {
      if (a.surveyUnitIdentificationName < b.surveyUnitIdentificationName)
        return newDirection === "asc" ? -1 : 1;
      if (a.surveyUnitIdentificationName > b.surveyUnitIdentificationName)
        return newDirection === "asc" ? 1 : -1;
      return 0;
    });

    setSortedQuestionings(sorted);
    setSortDirection(newDirection);
    setCurrentPage(1);
  };

  const getAction = (questioning: any) => {
    if (questioning.deliveryUrl && questioning.questioningStatus === "RECEIVED") {
      return (
        <Download
          className={fr.cx("fr-m-0")}
          details="TODO taille"
          label={t("download deposit proof")}
          linkProps={{
            href: questioning.deliveryUrl,
          }}
        />
      );
    }

    if (questioning.questioningAccessUrl && questioning.questioningStatus === "OPEN") {
      return (
        <Button
          size="small"
          linkProps={{
            href: questioning.questioningAccessUrl,
          }}
        >
          {t("go to survey")}
        </Button>
      );
    }
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
                  {currentItems.map((questioning: any) => (
                    <tr
                      style={{ height: "70px" }}
                      key={`${questioning.surveyUnitIdentificationCode}-${questioning.partitioningLabel}`}
                    >
                      {!hasSingleSurveyUnit && (
                        <>
                          <td>{questioning.surveyUnitIdentificationCode}</td>
                          <td>{questioning.surveyUnitIdentificationName}</td>
                        </>
                      )}
                      <td>{questioning.partitioningLabel}</td>
                      <td>
                        <QuestioningStatus translation={t} status={questioning.questioningStatus} />
                      </td>
                      <td>{getAction(questioning)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <QuestioningPagination
        totalPages={totalPages}
        defaultPage={currentPage}
        onPageChange={handlePageChange}
      />
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
>()("SurveyTable");

export type I18n = typeof i18n;
