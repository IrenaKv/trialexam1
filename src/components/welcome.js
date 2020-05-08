import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <Link strict to="/onduty" exact>
        <button>Who is on duty?</button>
      </Link>
      <Link strict to="/signup" exact>
        <button>I am a new patient</button>
      </Link>
    </div>
  );
}
