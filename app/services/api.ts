import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://192.168.1.8:5000";

async function post(path: string, data: any) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let parsed = null;
  try {
    parsed = await res.json();
  } catch (e) {}

  return { ok: res.ok, status: res.status, data: parsed };
}

async function put(path: string, data: any) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let parsed = null;
  try {
    parsed = await res.json();
  } catch (e) {}

  return { ok: res.ok, status: res.status, data: parsed };
}

/* ---------- AUTH ---------- */

export const registerUser = async (data: any) => post("/register", data);

export const loginUser = async (data: any) => {
  const res = await post("/login", data);

  // Save email after login
  if (res.ok && data.email) {
    await AsyncStorage.setItem("userEmail", data.email);
  }

  return res;
};

/* ---------- USER PROFILE ---------- */

export const getUserProfile = async () => {

  const email = await AsyncStorage.getItem("userEmail");

  const res = await fetch(`${BASE_URL}/user/profile`, {
    headers: {
      "Content-Type": "application/json",
      "email": email || ""
    }
  });

  return { ok: res.ok, data: await res.json() };
};

export const updateUserProfile = async (data: any) => {
  return put("/user/update", data);
};