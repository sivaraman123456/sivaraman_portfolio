import nodemailer from "nodemailer";

interface SendEmailParams {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function sendContactNotification({
  name,
  email,
  subject,
  message,
}: SendEmailParams): Promise<{ sent: boolean; reason?: string }> {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const recipient =
    process.env.NOTIFICATION_RECEIVER_EMAIL || "sivaraman93440@gmail.com";

  if (!user || !pass) {
    console.warn(
      "Email credentials (EMAIL_USER / EMAIL_PASS) not set. Skipping email dispatch."
    );
    return { sent: false, reason: "Email credentials not configured." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const mailSubject = subject || `New Portfolio Message from ${name}`;

  const adminHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
      <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">New Contact Message Received</h2>
      <p style="color: #475569; font-size: 15px;">You received a new inquiry from your portfolio website:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #1e293b; width: 120px;">Sender Name:</td>
          <td style="padding: 10px 0; color: #334155;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #1e293b;">Sender Email:</td>
          <td style="padding: 10px 0; color: #2563eb;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #1e293b;">Subject:</td>
          <td style="padding: 10px 0; color: #334155;">${mailSubject}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #1e293b; vertical-align: top;">Message:</td>
          <td style="padding: 10px 0; color: #334155; line-height: 1.6; white-space: pre-wrap; background-color: #f8fafc; border-radius: 6px; padding: 12px;">${message}</td>
        </tr>
      </table>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #94a3b8; text-align: center;">
        Sent automatically from Sivaraman's Portfolio Server.
      </div>
    </div>
  `;

  const userAutoReplyHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
      <h2 style="color: #0f172a; margin-top: 0; color: #2563eb;">Thank you for reaching out!</h2>
      <p style="color: #334155; font-size: 15px; line-height: 1.6;">Hi ${name},</p>
      <p style="color: #334155; font-size: 15px; line-height: 1.6;">
        Thank you for contacting me through my portfolio. I have received your message regarding <strong>"${mailSubject}"</strong> and will get back to you as soon as possible.
      </p>
      <div style="margin: 20px 0; padding: 14px; background-color: #f1f5f9; border-left: 4px solid #3b82f6; border-radius: 4px; font-size: 14px; color: #475569;">
        <strong>Your Message:</strong><br/>
        ${message}
      </div>
      <p style="color: #334155; font-size: 15px; line-height: 1.6;">
        Best regards,<br/>
        <strong>Sivaraman</strong><br/>
        Full Stack Developer (React.js • Node.js)<br/>
        <a href="https://sivaraman-portfolio.vercel.app" style="color: #2563eb;">sivaraman-portfolio.vercel.app</a>
      </p>
    </div>
  `;

  try {
    // 1. Send alert to Sivaraman
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${user}>`,
      to: recipient,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${mailSubject}`,
      html: adminHtml,
    });

    // 2. Send polite confirmation to visitor
    try {
      await transporter.sendMail({
        from: `"Sivaraman" <${user}>`,
        to: email,
        subject: `Thank you for contacting Sivaraman: ${mailSubject}`,
        html: userAutoReplyHtml,
      });
    } catch (visitorErr) {
      console.warn("Could not send auto-reply to visitor:", visitorErr);
    }

    return { sent: true };
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error("Nodemailer error:", errMessage);
    return { sent: false, reason: errMessage };
  }
}

