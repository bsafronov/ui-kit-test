import { Button } from "@/ui";

const Playground = () => {
  return (
    <div className="flex flex-col align-start gap-1 m-1">
      <Button>Основная</Button>
      <Button _s={{ outlined: true }}>Основная с обводкой</Button>
      <Button _s={{ variant: "danger" }}>Отмена</Button>
      <Button _s={{ variant: "danger", outlined: true }}>
        Отмена с обводкой
      </Button>
      <Button _s={{ variant: "caution" }}>Предупреждение</Button>
      <Button _s={{ variant: "caution", outlined: true }}>
        Предупреждение с обводкой
      </Button>
    </div>
  );
};

export default Playground;
