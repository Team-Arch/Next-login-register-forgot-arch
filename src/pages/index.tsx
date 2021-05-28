import styles from "../styles/home.module.scss";
import Meta from "../components/Meta/Meta";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <h1>Open the code in your code editor</h1>
        <div className={styles.buttonBox}>
          <button onClick={() => router.push("/credentials/login")}>
            Login
          </button>
          <button onClick={() => router.push("/credentials/register")}>
            Register
          </button>
          <button onClick={() => router.push("/credentials/forgot")}>
            Forgot
          </button>
        </div>
      </div>
    </>
  );
}
