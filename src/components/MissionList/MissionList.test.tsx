import React from "react";
import {shallow} from "enzyme";
import Loader from "./Loader";
import CircularProgress from '@material-ui/core/CircularProgress';


describe("It should render the MissionList component" , () => {
    const container = shallow(<Loader/>)

  it("should render the loading component" , () => {
      expect(container.containsMatchingElement(<CircularProgress/>)).toEqual(true)
  })

  it("should render the div" , () => {
      expect(container.find("div").length).toEqual(1)
  })
})
