import axios from "axios";


export const crear = async (data) => await axios.post('http://10.0.2.2:4000/create/user', data);
export const Login = async (data) => await axios.post('http://10.0.2.2:4000/login/user', data);
export const Mostrar = async () => await axios.get('http://10.0.2.2:4000/show/contacts');
export const contacto = async (data) => await axios.post('http://10.0.2.2:4000/create/contact', data);
export const eliminar = async (data) => await axios.post('http://10.0.2.2:4000/delete/contact', data);