import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {

  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/First Name:/i);
  const lastNameInput = screen.getByLabelText(/Last Name:/i);
  const addressInput = screen.getByLabelText(/Address:/i);
  const cityInput = screen.getByLabelText(/City:/i);
  const stateInput = screen.getByLabelText(/State:/i);
  const zipInput = screen.getByLabelText(/Zip:/i);

  fireEvent.change(firstNameInput, { target:{ value: 'Rees', name:'firstName'}});
  fireEvent.change(lastNameInput, { target:{ value: 'Harper', name:'lastName'}});
  fireEvent.change(addressInput, { target:{ value: '7404 Brookside Parkway', name:'address'}});
  fireEvent.change(cityInput, { target:{ value: 'Middleburg Hts.', name:'city'}});
  fireEvent.change(stateInput, { target:{ value: 'Ohio', name:'state'}});
  fireEvent.change(zipInput, { target:{ value: '44130', name:'zip'}});

  const button = screen.getByRole("button");
  fireEvent.click(button);

  const success = await screen.findByTestId(/successMessage/i)
  expect(success).toBeTruthy();

  const newFirstName = await screen.getByText(/Rees/i);
  const newLastName = await screen.getByText(/Harper/i);
  const newAddress = await screen.getByText(/7404 Brookside Parkway/i);
  const newCity = await screen.getByText(/Middleburg Hts./i);
  const newState = await screen.getByText(/Ohio/i);
  const newZip = await screen.getByText(/44130/i);

  expect(newFirstName).toBeTruthy();
  expect(newLastName).toBeTruthy();
  expect(newAddress).toBeTruthy();
  expect(newCity).toBeTruthy();
  expect(newState).toBeTruthy();
  expect(newZip).toBeTruthy();

});
