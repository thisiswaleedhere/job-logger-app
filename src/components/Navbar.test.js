import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";

test('renders Job Logger title in the navbar', () => {
    render(<><Provider store={appStore}><Navbar /></Provider></>);
    const linkElement = screen.getByText(/job logger/i);
    expect(linkElement).toBeInTheDocument();
});

