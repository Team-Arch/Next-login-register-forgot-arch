import styles from "../styles/home.module.scss";
import Meta from "../components/Meta/Meta";

export default function Home() {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <h1>Start Code</h1>
      </div>
    </>
  );
}
