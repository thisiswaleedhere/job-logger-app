import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import Login from "./Login";

test('renders sign in component on load', () => {
    render(<><Provider store={appStore}><Login /></Provider></>);
    const linkElement = screen.getAllByText(/sign in/i);
    expect(linkElement).toHaveLength(2)
});

test('renders two input element for  email and password', () => {
    render(<Provider store={appStore}      ><Login /></Provider>)
    const emailInput = screen.getByPlaceholderText("Email")
    const passwordInput = screen.getByPlaceholderText("Password")
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument();
})


