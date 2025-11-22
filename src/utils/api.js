const API_BASE = "http://localhost:5000/api";

export const api = {
  // GET events
  getEvents: async () => {
    const res = await fetch(`${API_BASE}/events`);
    return res.json();
  },

  // GET team
  getTeam: async () => {
    const res = await fetch(`${API_BASE}/team`);
    return res.json();
  },

  // LOGIN admin
  login: async (email, password) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    return res.json();
  },

  // File Upload
  uploadFile: async (formData) => {
    const res = await fetch(`${API_BASE}/upload`, {
      method: "POST",
      body: formData
    });
    return res.json();
  }
};
