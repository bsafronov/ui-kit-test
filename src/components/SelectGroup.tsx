import { Card, Heading, Select } from "@/ui";
import { ISelectOption } from "@/ui/select/Select";
import { useState } from "react";

const SelectGroup = () => {
  const [selected, setSelected] = useState<ISelectOption>();
  console.log(selected);

  const options = [
    { value: "Выбор 1", label: "Выбор 1" },
    {
      value: "Выбор 2",
      label: "Выбор 1233333333331222222222222222222222222222",
    },
    { value: "Выбор 3", label: "Выбор 3" },
    { value: "Выбор 4", label: "Выбор 4" },
    { value: "Выбор 5", label: "Выбор 4" },
    { value: "Выбор 6", label: "Выбор 4" },
    { value: "Выбор 7", label: "Выбор 4" },
    { value: "Выбор 8", label: "Выбор 4" },
    { value: "Выбор 9", label: "Выбор 4" },
  ];
  return (
    <Card head={<Heading lvl={5}>Селекторы</Heading>}>
      <Select options={options} setValue={(e) => setSelected(e)} />
    </Card>
  );
};

export default SelectGroup;
