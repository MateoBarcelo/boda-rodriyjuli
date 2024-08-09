import styles from "./App.module.css";
import { MainCard } from "./components/MainCard";

function App() {
  return (
    <div className={styles.main}>
      <MainCard names={{ first: "Rodrigo", second: "Juliana" }} />
    </div>
  );
}

export default App;
