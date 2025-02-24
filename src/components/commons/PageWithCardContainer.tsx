import { fr } from "@codegouvfr/react-dsfr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import type { ReactNode } from "react";

type Props = {
  titleShort?: string;
  currentPageLabel: string;
  surveyId?: string;
  children: ReactNode;
};

export const PageWithCardContainer = ({ children, titleShort, surveyId, currentPageLabel }: Props) => {
  return (
    <div className={fr.cx("fr-container")}>
      <Breadcrumb
        currentPageLabel={currentPageLabel}
        className={fr.cx("fr-mb-0")}
        homeLinkProps={{
          to: "/",
        }}
        segments={
          surveyId
            ? [
                {
                  label: titleShort,
                  linkProps: {
                    to: "/mes-enquetes/$survey/introduction",
                    params: { survey: surveyId },
                  },
                },
              ]
            : []
        }
      />
      <div id="content" className={fr.cx("fr-grid-row", "fr-grid-row--center")}>
        <div
          className={fr.cx("fr-col-md-10", "fr-col-lg-7", "fr-col-12", "fr-mt-3w", "fr-mb-3w")}
          style={{
            backgroundColor: fr.colors.decisions.background.default.grey.hover,
          }}
        >
          <div className={fr.cx("fr-grid-row", "fr-grid-row--center", "fr-py-md-7w", "fr-py-3w")}>
            <div className={fr.cx("fr-col-11", "fr-col-md-9")}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
