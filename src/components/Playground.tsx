import { Button, Card, Heading } from "@/ui";
import Pallete from "./Pallete";
import { colors } from "@/colors";

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
      <div className="flex gap-1">
        <Card
          className="flex flex-col gap-1 align-start"
          head={<Heading lvl={5}>Маленькие кнопки</Heading>}
        >
          <Button size="sm">Стандартная</Button>
          <Button size="sm" variant="secondary">
            Дополнительная
          </Button>
          <Button size="sm" variant="plain">
            Пустая
          </Button>
          <Button size="sm" variant="outline">
            С обводкой
          </Button>
          <Button size="sm" variant="decline">
            Отменить
          </Button>
          <Button size="sm" variant="accept">
            Принять
          </Button>
        </Card>
        <Card
          className="flex flex-col gap-1 align-start"
          head={<Heading lvl={5}>Средние кнопки</Heading>}
        >
          <Button>Стандартная</Button>
          <Button variant="secondary">Дополнительная</Button>
          <Button variant="plain">Пустая</Button>
          <Button variant="outline">С обводкой</Button>
          <Button variant="decline">Отменить</Button>
          <Button variant="accept">Принять</Button>
        </Card>
        <Card
          className="flex flex-col gap-1 align-start"
          head={<Heading lvl={5}>Средние кнопки</Heading>}
        >
          <Heading lvl={5}>Большие кнопки</Heading>
          <Button size="lg">Стандартная</Button>
          <Button size="lg" variant="secondary">
            Дополнительная
          </Button>
          <Button size="lg" variant="plain">
            Пустая
          </Button>
          <Button size="lg" variant="outline">
            С обводкой
          </Button>
          <Button size="lg" variant="decline">
            Отменить
          </Button>
          <Button size="lg" variant="accept">
            Принять
          </Button>
        </Card>
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
