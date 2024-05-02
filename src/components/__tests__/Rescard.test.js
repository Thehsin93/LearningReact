import MOCK_DATA from "../Mocks/MockResCard.json";
import { render, screen } from "@testing-library/react";
import Rescard from "../Rescard";
import "@testing-library/jest-dom"

test("Test whether restaurant card loads ",()=>{
render(<Rescard resData={MOCK_DATA}></Rescard>);
const name = screen.getByText("HOTEL MH 34 Biryani Center");

  expect(name).toBeInTheDocument();
})