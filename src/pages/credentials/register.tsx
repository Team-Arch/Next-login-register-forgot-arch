import Link from "next/link";
import Head from "next/head";

import styles from "./styles/register.module.scss";
import BackButton from "../../components/BackButton/BackButton";

export default function register() {
  return (
    <>
      <Head>
        <title>Arch Team | Register</title>
      </Head>
      <div className={styles.registerPage}>
        <BackButton />
        <div className={styles.registerBox}>
          <h1 className={styles.title}>Create New Account</h1>
          <p className={styles.subTitle}>Please fill in the form to continue</p>
          <div className={styles.inputBox}>
            <div className={styles.inputUser}>
              <input type={"text"} id={"user"} maxLength={61} required></input>
              <label className={styles.userLabel} htmlFor="user">
                Username
              </label>
            </div>
            <div className={styles.inputEmail}>
              <input type={"text"} id={"email"} maxLength={61} required></input>
              <label className={styles.emailLabel} htmlFor="email">
                Email
              </label>
            </div>
            <div className={styles.inputPass}>
              <input
                type={"password"}
                id={"password"}
                maxLength={41}
                required
              ></input>
              <label className={styles.passLabel} htmlFor="pass">
                Password
              </label>
            </div>
            <div className={styles.inputPass}>
              <input
                type={"password"}
                id={"password"}
                maxLength={41}
                required
              ></input>
              <label className={styles.passLabel} htmlFor="pass">
                Confirm password
              </label>
            </div>
          </div>
          <div className={styles.registerBtnBox}>
            <button className={styles.registerBtn}>
              <span className={styles.registerBtnText}>Register now</span>
            </button>
            <p>
              Have an account? <a href={"/credentials/login"}>Login now</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
