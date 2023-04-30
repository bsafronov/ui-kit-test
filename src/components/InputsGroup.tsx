import { Card, Heading, Input } from "@/ui";
import { useState } from "react";

const InputsGroup = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  return (
    <Card
      head={<Heading lvl={5}>Поля формы</Heading>}
      className="flex flex-col gap-1"
    >
      <Input
        label="Имя"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Имя"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error="Поле с ошибкой"
      />
      <Input
        label="Номер телефона"
        type="tel"
        placeholder="+7"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Input label="Почта" type="email" />
      <Input label="Дата" type="date" />
    </Card>
  );
};

export default InputsGroup;
