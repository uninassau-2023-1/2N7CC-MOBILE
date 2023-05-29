import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AiFillAppstore } from "react-icons/ai";


export default function Home() {
  return (
    <>
      <div>
        <h1>Olá</h1>
        <p><Link href="guiches">guiches</Link></p>
      </div>
    </>
  );
}
