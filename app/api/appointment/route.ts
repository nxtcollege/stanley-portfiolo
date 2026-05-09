import { NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  const body = await req.json();
  const ourDate = new Date(body.date);
  const readableDate = ourDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  try {
    // send mail to save a life physiotherapy
    resend.emails.send({
      from: "Appointment <info@info.savealifephysiotherapy.com>",
      to: ["savealife.physiotherapyclinic@gmail.com"],
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
      <p><strong>Date:</strong> ${readableDate}</p>

      ${body.moreInfo ? `<p><strong>Additional Information:</strong> ${body.moreInfo}</p>` : ""}

      <hr style="margin: 20px 0;" />

      <p style="color: #777; font-size: 12px;">
        This message was generated from your website appointment form. 
        If you did not expect this request, you can safely ignore this email.
      </p>

      </div>
      </div>`,
    });

    // send a mail to the person requesting an appointment
    await resend.emails.send({
      to: [body.email],
      from: "Appointment <info@info.savealifephysiotherapy.com>",
      subject: "Appointment Request Received",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e5e5;">

        <h2 style="color: #333; margin-bottom: 10px;">
          Appointment Request Received
        </h2>

        <p style="color: #555;">
          Dear ${body.name},
        </p>

        <p style="color: #555;">
          Thank you for booking an appointment with 
          <strong>Save A Life Physiotherapy</strong>.
        </p>

        <p style="color: #555;">
          We have successfully received your appointment request and our team will review the details shortly.
          We will contact you if any additional information is needed.
        </p>

        <hr style="margin: 20px 0;" />

        <h3 style="color: #333;">Appointment Details</h3>

        <p><strong>Appointment Type:</strong> ${body.appointmentType}</p>
        <p><strong>Preferred Date:</strong> ${readableDate}</p>

        <hr style="margin: 20px 0;" />

        <p style="color: #555;">
          If you have any urgent questions, please feel free to call 08107005473.
        </p>

        <p style="color: #555;">
          We appreciate your trust in us and look forward to assisting you.
        </p>

        <p style="margin-top: 30px; color: #333;">
          Best regards,<br />
          <strong>Save A Life Physiotherapy</strong>
        </p>

      </div>
    </div>
  `,
    });
    return new Response(
      JSON.stringify({ message: "request submitted successfully" }),
    );
  } catch (error) {
    throw new Error("something went wrong");
  }
}
