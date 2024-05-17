"use client";

import React, { useEffect, useRef, useState } from "react";
import CustomImage from "../CustomImage.component";
import CheckButton from "../CheckButton.component";

interface DropdownWithSearchProps {
  width?: string;
  itemList?: string[];
  selectionCallback?: (selectedItems: string[]) => void;
}

const DropdownWithSearch: React.FC<DropdownWithSearchProps> = ({
  width = "250px",
  itemList = [],
  selectionCallback,
}) => {
  interface ItemType {
    name: string;
    selected: boolean;
  }

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<ItemType[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchInput("");
    if (!isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const renderSelectedItems = () => {
    const selectedItemsCount = selectedItems.filter(
      (item) => item.selected
    ).length;

    if (selectedItemsCount === 0) {
      return "Position Title";
    } else if (selectedItemsCount < 3) {
      return selectedItems
        .filter((item) => item.selected)
        .map((item) => item.name)
        .join(", ");
    } else {
      return `${selectedItemsCount} selected`;
    }
  };

  const handleItemClick = (itemName: string) => {
    const index = selectedItems.findIndex(
      (selectedItem) => selectedItem.name === itemName
    );
    const newSelectedItems = [...selectedItems];

    if (index === -1) {
      newSelectedItems.push({ name: itemName, selected: true });
    } else {
      newSelectedItems[index].selected = !newSelectedItems[index].selected;
    }

    setSelectedItems(newSelectedItems);

    if (selectionCallback) {
      const selectedNames = newSelectedItems
        .filter((item) => item.selected)
        .map((item) => item.name);
      selectionCallback(selectedNames);
    }

    // Update the state of Select All button
    const allSelected = filteredItems.every((item) => {
      const selectedItemIndex = newSelectedItems.findIndex(
        (selectedItem) => selectedItem.name === item.name
      );
      const isSelected =
        selectedItemIndex !== -1 &&
        newSelectedItems[selectedItemIndex].selected;

      return isSelected;
    });
    setSelectedAll(allSelected);
  };

  const arrayData: ItemType[] = [
    { name: "item 1", selected: false },
    { name: "item 2", selected: false },
    { name: "item 3", selected: false },
    { name: "item 4", selected: false },
  ];

  const filteredItems = searchInput
    ? arrayData.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    : arrayData;

  const handleSelectAll = () => {
    // Toggle all items selection status
    const updatedItems = filteredItems.map((item) => ({
      ...item,
      selected: !selectedAll,
    }));

    setSelectedItems(updatedItems);
    setSelectedAll(!selectedAll);

    // Callback to parent component if needed
    if (selectionCallback) {
      const selectedNames = updatedItems
        .filter((item) => item.selected)
        .map((item) => item.name);
      selectionCallback(selectedNames);
    }
  };
  return (
    <div ref={dropdownRef} className="relative ">
      <div>
        <div
          className="flex justify-between text-left border-[1px] py-[13px] px-[9px] rounded-[12px] bg-gradient-to-br from-opacity-35 to-opacity-83 from-white via-white to-transparent cursor-pointer"
          style={{
            // width: width,
            backgroundImage:
              "linear-gradient(241.25deg, rgba(250, 250, 255, 0.35) 4.4%, rgba(255, 255, 255, 0.83) 119.94%)",
          }}
          onClick={toggleDropdown}
        >
          <p className="text-[#697785] text-[12px] font-[400]">
            {renderSelectedItems()}
          </p>
          <CustomImage name={"arrowDownGrayIcon"} />
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{ width: "100%", zIndex: '2' }}
        >
          <div className="py-4 px-[9px]" role="none">
            <div className="flex justify-between border-[2px] border-[#EDF4FB] rounded-[8px] pt-[9px] pb-[11px] pl-[9px] pr-[8px] bg-[#EDF4FB]">
              <input
                ref={inputRef}
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search here..."
                className="text-sm text-[#697785] font-[400] bg-transparent outline-none border-none bg-[#EDF4FB]"
              />
              <CustomImage name="searchBlueIcon" />
            </div>
            <div
              onClick={() => handleSelectAll()}
              className="flex items-center gap-[10px] cursor-pointer"
            >
              <CheckButton checked={selectedAll} />
              <div className="w-full mt-[14px]">
                <p
                  className="text-[12px] font-[600] text-[#383A38]"
                  role="menuitem"
                >
                  {"Select all"}
                </p>
                <div className="h-[1px] bg-[#B0B0B0] mt-[12px]" />
              </div>
            </div>
            {filteredItems.map((item, index) => {
              const selectedItemIndex = selectedItems.findIndex(
                (selectedItem) => selectedItem.name === item.name
              );
              const isSelected =
                selectedItemIndex !== -1 &&
                selectedItems[selectedItemIndex].selected;
              return (
                <div
                  key={index}
                  onClick={() => handleItemClick(item.name)}
                  className="flex items-center gap-[10px] cursor-pointer"
                >
                  <CheckButton checked={isSelected} />
                  <div className="w-full mt-[14px]">
                    <p
                      key={index}
                      className="text-[12px] font-[600] text-[#383A38]"
                      // role="menuitem"
                      tabIndex={index}
                    >
                      {item.name}
                    </p>
                    <div className="h-[1px] bg-[#B0B0B0] mt-[12px]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;
