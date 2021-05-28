import Link from "next/link";
import Head from "next/head";

import styles from "./styles/login.module.scss";
import BackButton from "../../components/BackButton/BackButton";

export default function login() {
  return (
    <>
      <Head>
        <title>Arch Team | Login</title>
      </Head>
      <div className={styles.loginPage}>
        <BackButton />
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Welcome Back!</h1>
          <p className={styles.subTitle}>Please sign in to your account</p>
          <div className={styles.inputBox}>
            <div className={styles.inputEmail}>
              <input type={"text"} id={"email"} maxLength={61} required></input>
              <label className={styles.emailLabel} htmlFor="user">
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
            <a href={"/credentials/forgot"} className={styles.forgotPass}>
              Forgot password?
            </a>
          </div>
          <div className={styles.loginBtnBox}>
            <button className={styles.loginBtn}>
              <span className={styles.loginBtnText}>Login now</span>
            </button>
            <p>
              Dont have an account?{" "}
              <a href={"/credentials/register"}>Join free today</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
