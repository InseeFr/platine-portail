import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Faq } from "components/surveyHomepage/Faq";

export const Route = createFileRoute("/$survey/faq")({
  component: Index,
});

function Index() {
  const { surveyData, genericData } = useLoaderData({ from: "/$survey" });

  const faqData = surveyData.content["faq-data"];

  const generalFaqDataForCompany = surveyData.content["faq-data-general"];
  const generalFaqData = genericData.content["faq-data"];

  return (
    <Faq
      faqData={faqData}
      generalFaqData={
        generalFaqDataForCompany && isNotEmptyObjectArray(generalFaqDataForCompany)
          ? generalFaqDataForCompany
          : generalFaqData
      }
    />
  );
}

function isNotEmptyObjectArray(data: any[]): data is { title: string; body: string }[] {
  return (
    Array.isArray(data) &&
    data.every(
      item =>
        typeof item === "object" &&
        item !== null &&
        "title" in item &&
        typeof item.title === "string" &&
        "body" in item &&
        typeof item.body === "string",
    )
  );
}
