import { QuestioningCard } from "./QuestioningCard";
import { useTranslation } from "i18n";
import { useState } from "react";
import { QuestioningPagination } from "./QuestioningPagination";
import { DSFRContainer } from "components/commons/DSFRContainer";

type Props = {
  questionings: {
    sourceId?: string;
    surveyUnitIdentificationCode?: string;
    surveyUnitIdentificationName?: string;
    surveyUnitId?: string;
    questioningStatus?: string;
    questioningAccessUrl?: string;
    depositProofUrl?: string;
    questioningId?: number;
    partitioningLabel?: string;
    partitioningId?: string;
  }[];
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
    <DSFRContainer id="cards">
      <h3>{`${t("respond to survey")} ${questioningsSectionTitle}`}</h3>
      {currentItems.map(questioning => (
        <QuestioningCard
          questioning={questioning}
          key={`${questioning.surveyUnitId}-${questioning.partitioningId}`}
          hasSingleSurveyUnit={hasSingleSurveyUnit}
        />
      ))}
      {questionings.length > 10 && (
        <QuestioningPagination
          totalPages={totalPages}
          defaultPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </DSFRContainer>
  );
};
