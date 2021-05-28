import styles from "./backbutton.module.scss";

import { ArrowBarLeft } from "react-bootstrap-icons";

import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <div className={styles.backBtnBox}>
      <button onClick={() => router.back()} className={styles.backBtn}>
        <ArrowBarLeft width={"1.5rem"} height={"1.5rem"} />
      </button>
    </div>
  );
}
