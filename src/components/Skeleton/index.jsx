import React from "react";
import Skeleton from "./skeleton";

const SkeletonLoader = () =>
  new Array(10).fill(1).map((_, i) => {
    return <Skeleton key={i} />;
  });

export default SkeletonLoader;
