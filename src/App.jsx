import AddNewUser from "./components/AddNewUser";
export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        <h1>User List</h1>
        <AddNewUser />
      </div>
    </>
  );
}
