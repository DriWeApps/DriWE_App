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
  } catch (e) {
  }

  return { ok: res.ok, status: res.status, data: parsed };
}

export const registerUser = async (data: any) => post("/register", data);
export const loginUser    = async (data: any) => post("/login", data);
