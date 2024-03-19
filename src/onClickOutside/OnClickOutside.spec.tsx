
import { render, screen } from "@testing-library/react";
import {OnClickOutside} from "./OnClickOutside";

describe('App', () => {
  it('should render', () => {
    render(<OnClickOutside />)
    expect(screen.getByText(/save to test HMR/i)).toBeInTheDocument()
  })
});
