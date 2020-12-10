import React from "react";
import {shallow} from "enzyme";
import Header from "./Header"

describe("Should render the header component" , () => {
    const container = shallow(<Header/>)
    it("Should render the divs " , () => {
        expect(container.find("div").length).toEqual(3)
    });

    it("should render the navbar brand" , () => {
        expect(container.find("img").length).toEqual(1)
    })


})

