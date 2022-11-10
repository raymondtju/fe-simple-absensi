import ReactTypingEffect from "react-typing-effect";
import axios from "axios";
import { useState } from "react";

function Register({ title, description }) {
  const [NIP, setNIP] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };
  
  const handleNama = (inputNama) => {
    setNama(inputNama);
  };

  const handlePass = (inputPass) => {
    setPassword(inputPass);
  };

  const handleSubmit = (event) => {
    // prevent the page from reload after pressing submit button
    event.preventDefault();
  };

  const userRegister = () => {
    const requestData = {
      nip: NIP,
      nama: nama,
      password: password,
    };
    // console.log("Ready to login !");
    // console.log("nip :", NIP);
    // console.log("Password: ", password);
    axios({
      method: "POST",
      url: "http://localhost:3333/users/",
      data: requestData,
    }).then((result) => {
    //   console.log(result.data);
      if (result.data.registered) {
        window.location.replace("/login")
      } else {
        alert("Failed to register!!!")
      }
    }).catch((e) => alert("Failed to registe"))
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-5 text-3xl font-bold">
        <ReactTypingEffect
          text={[title, description]}
          eraseDelay={800}
          speed={100}
          eraseSpeed={100}
          typingDelay={100}
        />
      </div>
      <div className="my-5">
        <form className="mx-auto md:w-3/12 sm:w-10/12" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block text-sm font-bold text-slate-700">NIP</span>
            <input
              type="number"
              placeholder="masukkan nip"
              defaultValue=""
              className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
              required
              onChange={(event) => handleNIP(event.target.value)}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-700">NIP</span>
            <input
              type="text"
              placeholder="masukkan nama"
              defaultValue=""
              className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
              required
              onChange={(event) => handleNama(event.target.value)}
            />
          </label>
          <label className="block mt-1">
            <span className="block text-sm font-bold text-slate-700">
              Password
            </span>
            <input
              type="password"
              placeholder="masukkan password"
              defaultValue=""
              className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
              required
              onChange={(event) => handlePass(event.target.value)}
            />
          </label>
          <button
            className="w-full px-3 py-2 mt-2 text-white rounded-lg shadow-sm bg-slate-700"
            onClick={() => userRegister()}
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
