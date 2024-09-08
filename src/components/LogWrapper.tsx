import React, { useEffect } from "react";
import Button from "./Button";

function withLogging<P>(WrappedComponent: React.ComponentType<P>) {
  return (props: P) => {
    useEffect(() => {
      console.log("Component mounted");

      return () => {
        console.log("Component unmounted");
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export const LoggedButton = withLogging(Button);
