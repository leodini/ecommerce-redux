import React from "react";
import { useSelector } from "react-redux";

export default function Message() {
  const isShow = useSelector((state) => state.layoutReducer.showMessage);
  return (
    <React.Fragment>
      {isShow ? (
        <div className="container mt-3">
          <div className="alert alert-success" role="alert">
            Cadastro feito com sucesso
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
