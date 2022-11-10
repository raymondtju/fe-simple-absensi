import axios from "axios";
import { useEffect, useState } from "react";
import Edit from "./edit";

function Dashboard({ title }) {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotif, setAbsenNotif] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("nip") && !localStorage.getItem("nama")) {
      console.log("User hasn't login");
      window.location.replace("/login");
    }
    axios({
      method: "GET",
      url: "http://localhost:3333/absensi/",
    }).then((result) => setAbsensiList(result.data.absensi));
  }, [absenNotif]);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
}
  const absen = (params) => {
    console.log(params)
    axios ({
      method: "POST",
      url: `http://localhost:3333/absensi/${params}`,
      data: {nip: localStorage.getItem("nip")}
    }).then((result) => setAbsenNotif(!absenNotif))
  };

  return (
    <div className="container mx-auto">
      <h3>{title}</h3>
      <div>
        <p>Hello {localStorage.getItem("nama")} !</p>
        <p>NIP : {localStorage.getItem("nip")}</p>
        <button
          className="px-2 py-1 text-indigo-200 border rounded-lg bg-slate-700"
          onClick={() => logout()}
        >
          LOGOUT
        </button>
        <div>
        <h4>CheckIN & CheckOut</h4>
        <button
          className="bg-blue-500 text-white px-2 py-0.5 rounded-full m-2"
          onClick={() => absen("checkin")}
        >
          CheckIn
        </button>
        <button
          className="bg-red-500 text-white px-2 py-0.5 rounded-full m-2"
          onClick={() => absen("checkout")}
        >
          CheckOut
        </button>
      </div>
      <Edit/>
      </div>
      <div>
        <table className="table-auto">
          <thead className="border border-b-black ">
            <tr>
              <th>NO</th>
              <th>NIP</th>
              <th>Status</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {absensiList.map((absensi, i) => {
              const { users_nip, status, createdAt } = absensi;
              // console.log(absen.users_nip)
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{users_nip}</td>
                  <td>{status}</td>
                  <td>{createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}

export default Dashboard;
