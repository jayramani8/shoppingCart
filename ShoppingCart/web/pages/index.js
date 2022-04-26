import Head from "next/head";
import Image from "next/image";
import AdminLogin from "../components/admin/AdminLogin";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <AdminLogin />
    </>
  );
}
