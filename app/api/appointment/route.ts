import { NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  const body = await req.json();

  try {
    const response = await resend.emails.send({
      from: "Appointment <info@info.savealifephysiotherapy.com>",
      to: ["austinedavid96@gmail.com"],
      subject: "Appointment Request",
      html: `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e5e5;">
    
    <h2 style="color: #333; margin-bottom: 10px;">New Appointment Request</h2>
    <p style="color: #555;">You have received a new appointment request. Below are the details:</p>

    <hr style="margin: 20px 0;" />

    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone Number:</strong> ${body.phoneNo}</p>
    <p><strong>Appointment Type:</strong> ${body.appointmentType}</p>
    <p><strong>Date:</strong> ${body.date}</p>

    ${body.moreInfo ? `<p><strong>Additional Information:</strong> ${body.moreInfo}</p>` : ""}

    <hr style="margin: 20px 0;" />

    <p style="color: #777; font-size: 12px;">
      This message was generated from your website appointment form. 
      If you did not expect this request, you can safely ignore this email.
    </p>

  </div>
</div>`,
    });
    console.log(response);
    return new Response(
      JSON.stringify({ message: "request submitted successfully" }),
    );
  } catch (error) {
    throw new Error("something went wrong");
  }
}
