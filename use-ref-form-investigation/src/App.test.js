import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const btnInitialise = screen.getByTestId("btn-initialise");
  expect(btnInitialise).toBeInTheDocument();

  fireEvent(btnInitialise, new MouseEvent("click", { 
    bubbles:true, 
    cancelable:false
  }))

  const txtName = screen.getByTestId("txt-name");
  expect(txtName).toBeInTheDocument();
  expect(txtName.value).toBe("Aidan");

});
