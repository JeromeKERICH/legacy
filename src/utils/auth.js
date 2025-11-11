import { jwtDecode } from "jwt-decode";

export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function clearToken() {
  localStorage.removeItem("token");
}

export function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const payload = jwtDecode(token);
    return { ...payload, token };
  } catch (e) {
    return null;
  }
}
