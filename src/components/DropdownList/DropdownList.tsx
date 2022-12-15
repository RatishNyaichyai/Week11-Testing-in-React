import { ReactElement, useState } from "react";
import Button from "../Button/Button";

export interface DataItem {
  value: string;
  label: string;
}

export interface DropdownListProps {
  data: DataItem[];
  onRemoveItem: (item: DataItem, index: number) => void;
  labels: {
    show: string;
    hide: string;
  };
}

export const DropdownList = ({
  data,
  onRemoveItem,
  labels,
}: DropdownListProps): ReactElement => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const onToggleVisibility = () => setDropdownOpened((opened) => !opened);

  return (
    <div>
      <Button
        onClick={onToggleVisibility}
        label={dropdownOpened ? labels.hide : labels.show}

      />

      {dropdownOpened && (
        <ul data-testid="dropdown-ul">
          {data.map((item, index) => (
            <li key={item.value} data-testid={`dropdown-li-${item.value}`}>
              {item.label}

              <button onClick={() => onRemoveItem(item, index)} data-testid={`remove-button-${item.value}`}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
