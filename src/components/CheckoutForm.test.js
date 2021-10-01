import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});
    
test("shows success message on submit with form details", async () => {
//arrange
    render(<CheckoutForm />);
    //declare elements
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    const submitButton = screen.getByRole("button");
//act 
    //confirm elements exist
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(zipInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    //simulate user data entry
    userEvent.type(firstNameInput, "Jessie");
    userEvent.type(lastNameInput, "Yarmawa");
    userEvent.type(addressInput, "1447 Cloudy Lane")
    userEvent.type(cityInput, "Redlands")
    userEvent.type(stateInput, "California")
    userEvent.type(zipInput, "92345");
    userEvent.click(submitButton);
//assert
    const successMessage = await screen.getByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();
});
