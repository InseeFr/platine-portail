import { useTranslation } from "i18n";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { InformationPictogram } from "assets/Pictograms/Information";
import { CommunityPictogram } from "assets/Pictograms/Community";
import { SupportPageForm } from "./SupportPageForm";
import { useFetchQueryPortailWithoutAuth } from "hooks/useFetchQuery";
import { Loading } from "components/surveyHomepage/Loading";
import { fr } from "@codegouvfr/react-dsfr";

export function SupportPage() {
  const { t } = useTranslation("Support");

  const { data: sources, isLoading } = useFetchQueryPortailWithoutAuth("/sources/ongoing");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className={fr.cx("fr-container", "fr-mb-6w")} id="content">
      <Breadcrumb
        className={fr.cx("fr-mb-0")}
        currentPageLabel={t("contact support")}
        homeLinkProps={{
          to: "/",
        }}
        segments={[]}
      />

      <div
        className={fr.cx("fr-grid-row", "fr-grid-row--middle", "fr-mt-md-0", "fr-mt-2w")}
        style={{ "flexWrap": "nowrap" }}
      >
        <InformationPictogram />
        <h2>{t("support title")}</h2>
      </div>
      <div className="fr-grid-row fr-grid-row--middle fr-grid-row--between">
        <SupportPageForm sources={sources} />

        <div className={fr.cx("fr-grid-row", "fr-grid-row--right", "fr-col-md-5")}>
          <CommunityPictogram />
        </div>
      </div>
    </section>
  );
}
