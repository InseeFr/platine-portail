import { fr } from "@codegouvfr/react-dsfr";
import Pagination from "@codegouvfr/react-dsfr/Pagination";
import { useTranslation } from "i18n";

type Props = {
  totalPages: number;
  defaultPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const QuestioningPagination = ({ totalPages, defaultPage, onPageChange }: Props) => {
  const { t } = useTranslation("SurveyTable");

  return (
    <div className={fr.cx("fr-grid-row", "fr-grid-row--center")}>
      <Pagination
        showFirstLast
        count={totalPages}
        defaultPage={defaultPage}
        getPageLinkProps={pageNumber => ({
          title: `${t("pagination label")} ${pageNumber}`,
          onClick: event => {
            event.preventDefault();
            onPageChange(pageNumber);
          },
          href: "#",
          key: `pagination-link-${pageNumber}`,
        })}
        className={fr.cx("fr-mt-1w")}
      />
    </div>
  );
};
