import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Enzyme requires adapter for usage
const adapter = new Adapter();
Enzyme.configure({ adapter });

// import component to test
import Main from "../../../src/components/Main";
import Navbar from "../../../src/components/Navbar";

describe("React Components Test", () => {
  describe("<Main /> component", () => {
    let main;
    beforeEach("Create component", () => {
      main = shallow(<Main />);
    });

    it("renders Navbar <Navbar /> component", () => {
      expect(main.find(Navbar).length).to.be.equal(1);
    });
  });
});
