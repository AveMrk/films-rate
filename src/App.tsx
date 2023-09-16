import "./App.css";
import Stars from "../src/components/Stars";
import { IRate } from "./models";

export default function App() {
  const rate: IRate = {
    value: 5
  }
  return (
    <div className="App">
      <Stars count={rate.value} />
    </div>
  );
}