import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard,MdInventory } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { AiOutlineAudit, AiFillCarryOut } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen bg-black text-white flex flex-col items-center gap-10">
      <div className="mt-4 text-2xl text-blue-800">Inventory Management</div>
      <div className="flex flex-col items-center gap-4">
        <div className="hover:bg-slate-600 w-56 rounded-lg h-10 text-center flex items-center">
           <div className="pl-2"><MdDashboard /></div> 
          <Link to="/app/dashboard" className="text-xl p-4">
            Dashboard
          </Link>
        </div>
        <div className="hover:bg-slate-600 w-56 rounded-lg h-9 text-center flex items-center">
           <div className="pl-2"><MdInventory /></div> 
          <Link to="/app/inventory" className="text-xl p-4">
            Inventory
          </Link>
        </div>
        <div className="hover:bg-slate-600 w-56 rounded-lg h-9 text-center flex items-center">
           <div className="pl-2"><AiFillCarryOut/></div> 
          <Link to="/app/assets" className="text-xl p-4">
            Assets
          </Link>
        </div>
        <div className="hover:bg-slate-600 w-56 rounded-lg h-9 text-center flex items-center">
           <div className="pl-2"><GrHostMaintenance /></div> 
          <Link to="/app/maintenance" className="text-xl p-4">
            Maintenance
          </Link>
        </div>
        <div className="hover:bg-slate-600 w-56 rounded-lg h-9 text-center flex items-center">
           <div className="pl-2"><AiOutlineAudit /></div> 
          <Link to="/app/audits" className="text-xl p-4">
            Audits
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
