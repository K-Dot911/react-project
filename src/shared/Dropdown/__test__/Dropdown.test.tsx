/**
 * @jest-enviroment jsdom
 */


import React from "react";
import {Dropdown} from "../Dropdown";
import {shallow} from "enzyme";



describe('Dropdown', function () {
    test('should render', () => {
        const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('#button')).toBeDefined();
    })

    test('should render snapshot', () => {
        const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>)
        expect(wrapper).toMatchSnapshot()
    })


});