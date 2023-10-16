import "./App.css";

const App = () => (
  <div className="flex flex-col justify-items-stretch h-full">
    <h1 className="flex flex-col justify-center flex-1">Blank Application</h1>
    <div className="flex flex-col justify-start items-center flex-1 pl-8">
      <ul className="list-disc flex-1 flex-col flex text-left">
        <li>Typescript</li>
        <li>React</li>
        <li>Bun</li>
        <li>Vite</li>
        <li>Tailwind</li>
      </ul>
    </div>
  </div>
);

export default App;
