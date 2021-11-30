import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./B"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        xxxx
        <OtherComponent />
      </Suspense>
    </div>
  );
}
export default MyComponent;
