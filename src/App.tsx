import { tv } from "tailwind-variants";
import { Button } from "./components/ui/Button";

const cardVariants = tv({
  slots: {
    card: 'bg-gray-50 rounded-lg shadow-sm p-6 space-y-3',
    title: 'font-bold text-2xl text-gray-950',
    description: 'text-gray-600 text-sm'
  }
})

const {card, title, description} = cardVariants()

function App() {
  return (
    <div className="p-10">
      <div className="space-y-3">
        <h2 className="text-4xl text-slate-800 --tracking-tighter font-extrabold text-center">
          Tailwind Variants
        </h2>
        <hr />
      </div>

      <div className="mt-10 flex gap-x-5">
        <Button size="sm">Button</Button>
        <Button size="md" variant="outlined">
          Button
        </Button>
        <Button size="lg">Button</Button>
      </div>

      <div className="mt-10">
        <div className={card()}>
          <h2 className={title()}>Card title</h2>
          <p className={description({
            className: 'text-base'
          })}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            totam, beatae placeat pariatur ipsum quam eaque quod amet aliquam,
            magni in soluta laboriosam. Dolores alias voluptatem omnis!
            Quibusdam, eaque temporibus!
          </p>
        </div>

        <div className={card()}>
          <h2 className={title()}>Card title</h2>
          <p className={description()}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            totam, beatae placeat pariatur ipsum quam eaque quod amet aliquam,
            magni in soluta laboriosam. Dolores alias voluptatem omnis!
            Quibusdam, eaque temporibus!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
