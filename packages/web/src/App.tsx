import * as React from "react";
import { UIComponentA, UIComponentB } from "@trjm/ui";

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  return (
    <div>
      <UIComponentA />
      <UIComponentB />
    </div>
  );
};

App.displayName = "App";
