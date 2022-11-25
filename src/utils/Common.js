export default function getUser() {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
}
export function getToken() {
  return sessionStorage.getItem("token") || null;
}
export function setUserSession(token, user) {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
}
export function removeUserSession() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("data");
}
