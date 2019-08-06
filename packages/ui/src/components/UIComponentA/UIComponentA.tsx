/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import * as React from "react";

interface IUIComponentAProps {}

export const UIComponentA: React.FunctionComponent<
  IUIComponentAProps
> = ({}) => {
  return (
    <div
      css={css`
        background: red;
      `}
    >
      This is Component A
    </div>
  );
};

UIComponentA.displayName = "UIComponentA";
