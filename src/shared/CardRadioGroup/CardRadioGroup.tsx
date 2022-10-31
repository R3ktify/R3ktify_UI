import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export interface RadioOption {
  id: string | number;
  price?: number;
  title?: string;
  duration?: string;
  description?: string;
}

export interface CardRadioGroupProps {
  options: RadioOption[];
  allowMultiSelect?: boolean;
  onChange?: (items: RadioOption[]) => void;
}

export default function CardRadioGroup(props: CardRadioGroupProps) {
  const [selectedItems, setSelectedItems] = useState<RadioOption[]>([]);

  function isSelected(value: RadioOption) {
    return selectedItems.find((el) => el === value) ? true : false;
  }

  function handleSelect(value: RadioOption) {
    if (!isSelected(value)) {
      const matchedItem = props.options.find((el) => el === value);
      if (matchedItem) {
        if (props.allowMultiSelect === true) {
          setSelectedItems([...selectedItems, matchedItem]);
        } else {
          setSelectedItems([matchedItem]);
        }
      }
    } else {
      handleDeselect(value);
    }
    props.onChange && props.onChange(selectedItems);
  }

  function handleDeselect(value: RadioOption) {
    const selectedItemsUpdated = selectedItems.filter((el) => el !== value);
    setSelectedItems(selectedItemsUpdated);
  }

  return (
    <RadioGroup
      value={selectedItems}
      onChange={(value) => {
        handleSelect(value as unknown as RadioOption);
      }}
    >
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-2">
        {props.options.map((option) => {
          const selected = isSelected(option);
          return (
            <RadioGroup.Option
              key={option.id}
              value={option}
              className={({ active }) =>
                `${
                  active
                    ? "ring-2 ring-offset-2 ring-offset-indigo-300 ring-white ring-opacity-60"
                    : ""
                }
                  ${
                    selected
                      ? "bg-indigo-600 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                  relative border rounded-lg shadow px-5 py-4 cursor-pointer flex focus:outline-none hover:shadow-md`
              }
            >
              {({ active }) => (
                <>
                  <div className="flex items-center w-full flex-row">
                    <div className="w-full">
                      <RadioGroup.Label
                        as="p"
                        className={`w-full text-xl justify-between font-semibold flex ${
                          selected ? "text-white" : "text-slate-800"
                        }`}
                      >
                        <span>{option.title}</span>
                        {option.price != null ? (
                          <span className="text-red-400 font-bold mr-2">
                            ${option.price}
                          </span>
                        ) : (
                          ""
                        )}
                      </RadioGroup.Label>
                      {option.duration && (
                        <RadioGroup.Description
                          as="span"
                          className={`inline ${
                            selected ? "text-sky-100" : "text-gray-400"
                          }`}
                        >
                          <FontAwesomeIcon icon={faClock} className="mr-2" />
                          {option.duration}
                        </RadioGroup.Description>
                      )}
                      {option.description && (
                        <RadioGroup.Description
                          as="div"
                          className={`mt-2 mr-2 ${
                            selected ? "text-sky-100" : "text-gray-400"
                          }`}
                        >
                          <span className="text-md">{option.description}</span>
                        </RadioGroup.Description>
                      )}
                    </div>
                    <div>
                      {selected ? (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 bg-gray-300 w-6 h-6 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
