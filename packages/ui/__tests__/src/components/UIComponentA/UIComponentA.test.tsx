import * as React from "react";
import { render } from "@testing-library/react";
import * as Serializer from "jest-emotion";
import { matchers } from "jest-emotion";
import { UIComponentA } from "../../../../src/components/UIComponentA/UIComponentA";

expect.extend(matchers);
expect.addSnapshotSerializer(Serializer);

describe("description", () => {
  it("snapshots", () => {
    const { asFragment } = render(<UIComponentA />);
    expect(asFragment()).toMatchSnapshot();
  });
});
