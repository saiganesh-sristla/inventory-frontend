import { useState, useEffect } from "react";

const Inventory = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");

  async function handleCreateTodo() {
    await axios.post("http://localhost:3000/todo", {
      title: title,
      description: description,
    });
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    setTitle("");
    setDescription("");
  }

  return (
    <div className="w-4/5 h-screen bg-yellow-300">
      <div className="font-bold text-2xl m-4">Add Products to Inventory</div>
      <div>
        <div className="bg-[#151515] flex flex-col justify-center items-center py-14 m-4 rounded-md w-1/3 mx-auto">
          <input
            className="rounded-lg"
            id="name"
            style={{ padding: 10, margin: 10 }}
            type="text"
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                document.getElementById("id").focus();
              }
            }}
          ></input>
          <br />
          <input
            className="rounded-lg"
            id="id"
            style={{ padding: 10, margin: 10 }}
            type="text"
            placeholder="product id"
            onChange={(e) => {
              setId(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                document.getElementById("desc").focus();
              }
            }}
          ></input>
          <br />
          <input
            className="rounded-lg"
            id="desc"
            style={{ padding: 10, margin: 10 }}
            type="text"
            placeholder="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleCreateTodo();
              }
            }}
          ></input>
          <br />
          <button
            className="p-2 m-2 bg-[#A91D3A] text-white rounded-md px-2 hover:bg-[#C73659]"
            onClick={handleCreateTodo}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
