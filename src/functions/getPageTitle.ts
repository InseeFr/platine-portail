export const getPageTitle = (currentPath: string) => {
  if (currentPath.includes("/cadre-juridique")) {
    return "legal framework";
  }
  if (currentPath.includes("/utilisation-reponse")) {
    return "what are your answers for?";
  }
  if (currentPath.includes("/documents")) {
    return "documents to the surveyed";
  }
  if (currentPath.includes("/resultats")) {
    return "some results";
  }
  if (currentPath.includes("/faq")) {
    return "FAQ";
  }
  if (currentPath.includes("/contacter-assistance")) {
    return "contact support";
  }

  return "survey introduction";
};
