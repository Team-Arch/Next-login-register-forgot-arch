import Link from "next/link";
import Head from "next/head";

import styles from "./styles/forgot.module.scss";
import BackButton from "../../components/BackButton/BackButton";

export default function forgot() {
  return (
    <>
      <Head>
        <title>Arch Team | Forgot Password</title>
      </Head>
      <div className={styles.loginPage}>
        <BackButton />
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Forgot Password?</h1>
          <p className={styles.subTitle}>
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>
          <div className={styles.inputBox}>
            <div className={styles.inputEmail}>
              <input type={"text"} id={"email"} maxLength={61} required></input>
              <label className={styles.emailLabel} htmlFor="user">
                Email
              </label>
            </div>
          </div>
          <div className={styles.loginBtnBox}>
            <button className={styles.loginBtn}>
              <span className={styles.loginBtnText}>Continue</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
