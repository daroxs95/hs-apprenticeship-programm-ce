import { Navbar } from "@/modules/scholarships/application/components/Navbar";

export default async function NotFound() {
  return (
    <>
      <Navbar title="Harbour.space" subtitle="Not Found" />
      <main
        className="keep-navbar-space main-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        Upps, not found :(
      </main>
    </>
  );
}
