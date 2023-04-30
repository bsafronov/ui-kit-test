import { Card, Heading } from "@/ui";
import Pallete from "./Pallete";
import { colors } from "@/colors";
import ButtonsGroup from "./ButtonsGroup";
import { ReactComponent as Plus } from "@svg/plus.svg";
import InputsGroup from "./InputsGroup";
import SelectGroup from "./SelectGroup";

const Playground = () => {
  return (
    <div className="flex flex-col gap-1">
      <Card head={<Heading lvl={5}>Заголовки</Heading>}>
        <Heading lvl={1}>Заголовок 1</Heading>
        <Heading lvl={2}>Заголовок 2</Heading>
        <Heading lvl={3}>Заголовок 3</Heading>
        <Heading lvl={4}>Заголовок 4</Heading>
        <Heading lvl={5}>Заголовок 5</Heading>
        <Heading lvl={6}>Заголовок 6</Heading>
      </Card>
      <div className="flex gap-1 flex-wrap">
        <ButtonsGroup
          title={<Heading lvl={5}>Маленькие кнопки</Heading>}
          styles={{ size: "sm" }}
        />
        <ButtonsGroup
          title={<Heading lvl={5}>Средние кнопки</Heading>}
          styles={{ size: "md" }}
        />
        <ButtonsGroup
          title={<Heading lvl={5}>Большие кнопки</Heading>}
          styles={{ size: "lg" }}
        />
        <ButtonsGroup
          title={<Heading lvl={5}>Выкл. кнопки</Heading>}
          disabled
        />
        <ButtonsGroup
          title={<Heading lvl={5}>Before кнопки</Heading>}
          styles={{ before: <Plus /> }}
        />
        <ButtonsGroup
          title={<Heading lvl={5}>After кнопки</Heading>}
          styles={{
            after: <Plus />,
          }}
        />
      </div>
      <div className="flex gap-1 align-start">
        <InputsGroup />
        <SelectGroup />
      </div>
      <div className="flex flex-col">
        <Pallete color={colors.indigo} />
        <Pallete color={colors.white} />
        <Pallete color={colors.black} />
      </div>
    </div>
  );
};

export default Playground;
