import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    // Email to YOU
    await resend.emails.send({
      from: "LineOff Website <onboarding@resend.dev>",
      to: "YOUR_EMAIL_HERE",
      subject: "New Hospitality Accounting Lead",
      html: `
  <h2>New Qualified Lead</h2>

  <p><b>Name:</b> ${name}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Hotel:</b> ${hotelName}</p>
  <p><b>Rooms:</b> ${rooms}</p>
  <p><b>Revenue:</b> ${monthlyRevenue}</p>

  <p><b>Message:</b> ${message}</p>
`,
    });

    let score = 0;

if (rooms === "31-100") score += 2;
if (rooms === "100+") score += 3;

if (monthlyRevenue === "200k+") score += 3;
if (monthlyRevenue === "50-200k") score += 2;

if (score >= 5) {
  console.log("🔥 HIGH VALUE LEAD");
}
    // Auto-reply to client
    await resend.emails.send({
      from: "LineOff <onboarding@resend.dev>",
      to: email,
      subject: "We received your request",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out. We'll review your request and get back to you within 24 hours.</p>
        <p>You can also book directly here:</p>
        <a href="https://lineoff.dk/book">Book a call</a>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
