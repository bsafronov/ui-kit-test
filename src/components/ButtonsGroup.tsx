import { Button, Card } from "@/ui";
import { IButtonProps } from "@/ui/button/Button.interface";

interface ButtonsGroupProps {
  title?: React.ReactNode;
  styles?: IButtonProps;
  disabled?: boolean;
}

const ButtonsGroup = (props: ButtonsGroupProps) => {
  const { title, styles, disabled } = props;

  return (
    <Card className="flex flex-col gap-1 align-start" head={title}>
      <Button {...styles} disabled={disabled}>
        Стандартная
      </Button>
      <Button {...styles} disabled={disabled} variant="secondary">
        Дополнительная
      </Button>
      <Button {...styles} disabled={disabled} variant="plain">
        Пустая
      </Button>
      <Button {...styles} disabled={disabled} variant="outline">
        С обводкой
      </Button>
      <Button {...styles} disabled={disabled} variant="decline">
        Отменить
      </Button>
      <Button {...styles} disabled={disabled} variant="accept">
        Принять
      </Button>
    </Card>
  );
};

export default ButtonsGroup;
