import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="flex-wrap bezh"
    speed={2}
    width={350}
    height={537}
    viewBox="0 0 350 537"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="142" y="175" rx="0" ry="0" width="0" height="1" />
    <circle cx="165" cy="168" r="145" />
    <rect x="37" y="335" rx="10" ry="10" width="263" height="27" />
    <rect x="38" y="379" rx="10" ry="10" width="263" height="88" />
    <rect x="38" y="486" rx="10" ry="10" width="94" height="35" />
    <rect x="177" y="485" rx="12" ry="12" width="125" height="45" />
  </ContentLoader>
);

export default Skeleton;
