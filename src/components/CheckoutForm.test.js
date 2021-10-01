import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});
    
test("shows success message on submit with form details", () => {
    //arrange
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    //act 
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(zipInput).toBeInTheDocument();

    //assert
});
