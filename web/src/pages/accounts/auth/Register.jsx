import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../../layouts/accounts/AuthLayout";

function Register() {
  const [is_loading, set_loading] = useState(false);

  return (
    <AuthLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          set_loading(!is_loading);
        }}
      >
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input disabled={is_loading} type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="">E-Mail</label>
          <input disabled={is_loading} type="email" />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input disabled={is_loading} type="password" />
        </div>

        <div className="form-group">
          <input disabled={is_loading} type="checkbox" />
          <span>I Agree</span>
        </div>

        <div className="my-2 grid-center gap-2">
          <button className="icon left" disabled={is_loading}>
            <span className="px-2">Register</span>
            <i
              className={`icon ${
                is_loading ? "spinner animate-spin" : "arrow right bg-blue-800"
              }`}
            ></i>
          </button>

          <small>
            <Link to={{ pathname: "/login/" }}>Already have an account</Link>
          </small>

          <small>
            <Link to={{ pathname: "#" }}>Terms and conditions</Link>
          </small>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
