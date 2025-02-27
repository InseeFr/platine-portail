import { fr } from "@codegouvfr/react-dsfr";
import { QuestioningCard } from "./QuestioningCard";
import { useTranslation } from "i18n";
import { useState } from "react";
import { QuestioningPagination } from "./QuestioningPagination";

type Props = {
  questionings: any;
  questioningsSectionTitle: string;
  hasSingleSurveyUnit: boolean;
};

export const QuestioningCardList = ({
  questioningsSectionTitle,
  questionings,
  hasSingleSurveyUnit,
}: Props) => {
  const { t } = useTranslation("SurveyHomepage");

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the elements to be displayed on the current page
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = questionings.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(questionings.length / 10);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={fr.cx("fr-container")} id="cards">
      <h3>{`${t("respond to survey")} ${questioningsSectionTitle}`}</h3>
      {currentItems.map((questioning: any) => (
        <QuestioningCard
          questioning={questioning}
          key={`${questioning.surveyUnitIdentificationCode}-${questioning.partitioningLabel}`}
          hasSingleSurveyUnit={hasSingleSurveyUnit}
        />
      ))}
      <QuestioningPagination
        totalPages={totalPages}
        defaultPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
