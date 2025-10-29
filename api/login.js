export default function handler(req, res) {
  if (req.method === "POST") {
    const { emailOrId, password } = req.body || {};

    if (!emailOrId || !password) {
      return res.status(400).json({ success: false, message: "Missing credentials" });
    }

    // Dummy successful login
    return res.status(200).json({ success: true, message: "Login successful", token: "xyz123" });
  }

  return res.status(405).json({ success: false, message: "Method not allowed" });
}
