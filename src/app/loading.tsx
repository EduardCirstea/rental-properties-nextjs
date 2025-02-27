"use client";
import ClipLoader from "react-spinners/ClipLoader";
const override = {
  display: "block",
  margin: "100px auto",
};
const LoadingPage = () => {
  return (
    <ClipLoader
      color="#eb82f6"
      loading={true}
      aria-label="Loading Spinner"
      cssOverride={override}
      size={150}
    />
  );
};

export default LoadingPage;
