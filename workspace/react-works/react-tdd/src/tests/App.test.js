import {render} from '@testing-library/react'

import {shallow} from 'enzyme'
// import App from '../App'; 
import Counter from '../Counter'; 


describe('My Test Counter Application', () => {
    
    test.skip('look for the text called Counter App  ', () => {
        const h1Element = render(<App />).getByText("Counter App"); 
        expect(h1Element).toBeInTheDocument();
    })

    let wrapper ; 
    beforeEach(() => {
        wrapper = shallow(<Counter />); 
    })

    

    test("looking for the text called Counter App", () => {
        const expectedText = "Counter App"; 
        let actualText = wrapper.find("h1").text(); 
        expect(actualText).toContain(expectedText); 
        
        //  console.log(wrapper.debug());
    })

    test('to validate count value ', () => {
        expect(wrapper.find("#count-value").text()).toBe("0"); 
    })
    
    test("to increment the value of count", () => {
        wrapper.find("#incr-btn").simulate("Click"); 
        expect(wrapper.find("#count-value").text()).toBe("1"); 
    })

    test("To increment and decrement the value of count", () => {
        // initial value will be 0 
        wrapper.find("#incr-btn").simulate("click");
        expect(wrapper.find("#count-value").text()).toBe("1");
        
        wrapper.find("#decr-btn").simulate("click"); 
        expect(wrapper.find("#count-value").text()).toBe("0");
    })


})
