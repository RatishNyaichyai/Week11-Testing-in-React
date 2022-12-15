import { DropdownList, DropdownListProps } from "./DropdownList";
import { fireEvent, render, screen } from "@testing-library/react";

const labels = {
  hide: "Hide",
  show: "Show",
};

const data = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
];

const makeSut = (props: Partial<DropdownListProps>) => {
  return render(
    <DropdownList
      data={data}
      labels={labels}
      onRemoveItem={jest.fn()}
      {...props}
    />
  );
};

describe("<DropdownList />", () => {
  test("Should not render ul component on initial render", () => {
    const { container } = makeSut({});
    expect(container.querySelector("ul")).not.toBeInTheDocument();
  });

  /**
   * TODO: Write test case for the following cases
   * Check if list is visible after one click on the button
   * Check if button labels are changing
   * Check if all items have been rendered correctly
   * Check if the remove callback is being called with correct values
   */
  test("Should render ul component when click on button", () => {
    const { container } = makeSut({});
    const showButton = screen.getByTestId("button")
    fireEvent.click(showButton)
    // const ul = screen.getByTestId("dropdown-ul")
    expect(screen.getByTestId("dropdown-ul")).toBeInTheDocument();

  });

  test("Should switch button label on click", () => {
    const { container } = makeSut({});
    const showButton = screen.getByTestId("button")
    fireEvent.click(showButton)
    expect(showButton).toHaveTextContent(/Hide/i);

  });

  test("Should render 3 li correctly", () => {
    const { container } = makeSut({});

    const showButton = screen.getByTestId("button")

    fireEvent.click(showButton)

    expect(container.querySelectorAll("li")).toHaveLength(3);

  });

  test("Should call onRemoveItem callback correctly", () => {
    const spy = jest.fn();
    const { getByTestId } = makeSut({ onRemoveItem: spy });

    const showButton = screen.getByTestId("button")

    fireEvent.click(showButton)

    fireEvent.click(getByTestId('remove-button-1'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
