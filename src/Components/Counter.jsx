import styles from "./Counter.module.css";

export default function Counter({ count, setCount }) {
  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  function handleSub() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleAdd}>
        Increase
      </button>
      <span className={styles.counter}>{count}</span>
      <button className={styles.btn} onClick={handleSub}>
        Decrease
      </button>
    </div>
  );
}
