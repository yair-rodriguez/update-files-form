import Head from "next/head";
import UserDocuments from "../components/UserDocuments";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Update files form</title>
        <meta name="description" content="A form for upload files" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>

      <NavBar />

      <main>
        <UserDocuments />
      </main>
    </>
  );
}
