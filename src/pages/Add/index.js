import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../../store/cars";
import { Creators as CreatorsLayout } from "../../store/layout";

export default function Add() {
  const [form, setForm] = useState({ name: "", url: "" });
  const dispatch = useDispatch();

  const formChange = (e) => {
    //pega os valores dos campos de forma dinamica conforme o nome
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar(form));
    setForm({ name: "", url: "" });
    dispatch(CreatorsLayout.showMessage());
    setTimeout(() => {
      dispatch(CreatorsLayout.hideMessage());
    }, 2000);
  };

  return (
    <form onSubmit={onSubmit} className="container mt-5">
      <div className="form-group">
        <label>Nome</label>
        <input
          onChange={formChange}
          type="text"
          name="name"
          className="form-control"
          placeholder="Nome..."
          value={form.name}
        />
      </div>
      <div className="form-group">
        <label>URL:</label>
        <input
          onChange={formChange}
          type="text"
          name="url"
          className="form-control"
          placeholder="URL:https://cars"
          value={form.url}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
}
