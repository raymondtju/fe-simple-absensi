import ReactTypingEffect from "react-typing-effect";

function Login({ title, description }) {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center text-3xl">
        <ReactTypingEffect
          text={[title, description]}
          eraseDelay={800}
          speed={100}
          eraseSpeed={100}
          typingDelay={100}
        />
      </div>
      <div className="my-5">
        <form className="mx-auto w-3/12">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">NIP</span>
            <input
              type="text"
              placeholder="masukkan nip"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            />
          </label>
          <label className="block mt-1">
            <span className="block text-sm font-medium text-slate-700">Password</span>
            <input
              type="password"
              placeholder="masukkan password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            />
          </label>
          <button className="bg-slate-700 text-white py-2 px-3 w-full rounded-lg shadow-sm mt-2">Login Now</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
