import React from "react";
import {shallow} from "enzyme";
import Loading from "./Loading";
import CircularProgress from "@material-ui/core/CircularProgress"

describe("It should render the Loading component" , () => {
    const container   = shallow(<Loading/>)
    it("should match the spinner component " , () => {
        expect(container.containsMatchingElement(<CircularProgress/>)).toEqual(true) 
    })

    it("should render the div" , () => {
        expect(container.find("div").length).toEqual(1)
    })
})

