import { useState } from "react";
import API from "../api/api";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Регистрация успешна!");
    } catch (err) {
      alert(err.response?.data?.msg || "Ошибка регистрации");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Имя" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Пароль" onChange={handleChange} />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
