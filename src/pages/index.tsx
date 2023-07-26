import Header from "@/components/header/Header";
import Login from "../pages/login";

export default function Home() {
  return (
    <>
      {/* <header
        style={{
          height: "75px",
          backgroundColor: "black",
          position: "sticky",
          top: -1,
          zIndex: 100,
          marginLeft: "-8px",
          marginRight: "-8px",
        }}
      /> */}
      <Login/>
    </>
  );
}
