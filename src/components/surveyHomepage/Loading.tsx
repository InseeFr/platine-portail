import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <div className="fr-container">
      <div className=" fr-grid-row fr-grid-row--center ">
        <div className="fr-col-1 fr-my-3w">
          <CircularProgress />
        </div>
      </div>
    </div>
  );
};
