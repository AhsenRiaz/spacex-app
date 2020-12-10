import React from "react";
import {shallow} from "enzyme";
import Home from "./Home";


describe("It should render the home component" , () =>{
    const container  = shallow(<Home/>);
    it("should render the following divs" , () => {
        expect(container.find("div").length).toEqual(7);
    })

    it("should render two button" , () => {
        expect(container.find("button").length).toEqual(2)
    })
})