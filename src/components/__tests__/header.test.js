import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Heading from "../Heading";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Heading />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", { name: "Login" });
  
    //const loginButton = screen.getByText("Login");
  
    expect(loginButton).toBeInTheDocument();
  });