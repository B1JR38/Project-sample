import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../web components/buttons/Button";
import "./institute.css";
import Input from "../../../web components/input/Input";

const Institute = () => {
  return (
    <>
      <div className="search-field">
        <Input
          className="s-field"
          inputPlaceholder={"Search Your Institutes"}
        />
        <Button className="button" BtnName={"Search"} value="Search" />
        <Link to="/addInstitute">
          <Button className="link" BtnName={"Add"} id="f-addinst" />
        </Link>
        <Link to="/editInstitute">
          <Button className="link" BtnName={"Update"} id="f-editinst" />
        </Link>
      </div>
    </>
  );
};

export default Institute;
