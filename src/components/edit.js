import axios from "axios";
import { useState } from "react";
import { logout } from "./logout";

const Edit = () => {
  const [nama, setNama] = useState(localStorage.getItem("nama"));
  const [password, setPassword] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");

  const updateProfile = () => {
    const requestData = {
      nip: localStorage.getItem("nip"),
      password: password,
      passwordBaru: passwordBaru,
      nama: nama,
    };
    axios({
      method: "PUT",
      url: "http://localhost:3333/users",
      data: requestData,
    }).then(() => {
      logout();
    });
  };

  const handleSubmit = (event) => {
    // prevent the page from reload after pressing submit button
    event.preventDefault();
  };

  return (
    <div className="my-5">
      <form className="mx-auto md:w-3/12 sm:w-10/12" onSubmit={handleSubmit}>
        <label className="block mt-1">
          <span className="block text-sm font-bold text-slate-700">Nama</span>
          <input
            type="text"
            placeholder="masukkan nama"
            defaultValue={localStorage.getItem("nama")}
            className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
            required
            onChange={(event) => setNama(event.target.value)}
          />
        </label>
        <label className="block mt-1">
          <span className="block text-sm font-bold text-slate-700">
            Password Lama
          </span>
          <input
            type="password"
            placeholder="masukkan password lama"
            defaultValue=""
            className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label className="block mt-1">
          <span className="block text-sm font-bold text-slate-700">
            Password Baru
          </span>
          <input
            type="password"
            placeholder="masukkan password baru"
            defaultValue=""
            className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
            required
            onChange={(event) => setPasswordBaru(event.target.value)}
          />
        </label>
        <button
          className="w-full px-3 py-2 mt-2 text-white rounded-lg shadow-sm bg-slate-700 hover:bg-slate-900"
          onClick={() => updateProfile()}
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Edit;
