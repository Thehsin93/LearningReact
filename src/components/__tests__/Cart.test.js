import { BrowserRouter } from "react-router-dom"
import MOCK_DATA_MENU from "../mocks/mockResMenu.json"
import MOCK_DATA from "../mocks/mockResListData.json";
import {act} from "react-dom/test-utils"
import { fireEvent,screen,render } from "@testing-library/react"
import Heading from "../Heading"
import RestCategory from "../RestCategory"
import { Provider } from "react-redux"
import Cart from "../Cart"
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Restaurant from "../Restaurant";



global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_MENU),
  })
);
test("should add items to cart while clicking add items button",async ()=>{
    await act(async()=>{
        render(<BrowserRouter>
        <Provider store={appStore}>
            <Heading/>
            <Restaurant/>
            <Cart/>
        </Provider>
        </BrowserRouter>)
    })

    const accordionHeader = screen.getByText("Main Course (4)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(4);
})

