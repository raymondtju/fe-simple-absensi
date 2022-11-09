import { useEffect } from "react";

function Dashboard({ title }) {
  useEffect(() => {
    if (!localStorage.getItem("nip") && !localStorage.getItem("nama")) {
      console.log("User hasn't login");
      window.location.replace("/login");
    }
  });

  return (
    <div className="container mx-auto">
      <h3>{title}</h3>
      <div>
        <p>Hello {localStorage.getItem("nama")} !</p>
        <p>NIP : {localStorage.getItem("nip")}</p>
      </div>
      <div>
        <table className="table-auto">
          <thead className="border border-b-black ">
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
