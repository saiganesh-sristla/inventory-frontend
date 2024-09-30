import { InventoryItems } from "../utils";

const Assets = () => {
  return (
    <div className="w-4/5 h-full bg-yellow-300 min-h-screen">
      <div className=" flex flex-col justify-center items-center">
        {/* {props.todos.map((todo, i) => {
            return <Todo key={i} todo={todo}/>
        })} */}
        {InventoryItems.map((item, idx) => {
          return (
            <div className="p-4 m-4 w-[80%] h-30 bg-[#EEEEEE] shadow-lg rounded-md">
              <h1 className="font-semibold ">Name: {item.Name}</h1>
              <h2 className="font-medium ">Description: {item.description}</h2>
              <button
                className="p-1 m-2 hover:bg-[#C73659] text-white rounded-md px-2 bg-[#A91D3A]"
                onClick={() => {}}
              >
                Update
              </button>
              <button
                className="p-1 m-2 hover:bg-[#C73659] text-white rounded-md px-2 bg-[#A91D3A]"
                onClick={() => {}}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assets;
