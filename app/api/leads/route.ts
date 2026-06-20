import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, message } = body;

    const ip_address = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const lead_source = req.headers.get("referer") || "direct";

    // 1. Save Lead to Supabase
    const { data: lead, error: dbError } = await supabase
      .from("leads")
      .insert({
        name,
        email,
        company: company || null,
        service_needed: service,
        budget,
        message,
        ip_address,
        lead_source,
        status: "New",
      } as any)
      .select()
      .single();

    if (dbError) {
      console.error("Supabase Error:", dbError);
    }

    // 2. Send Emails via Resend
    try {
      // Internal notification
      await resend.emails.send({
        from: "BuildYourWay <hello@buildyourway.agency>",
        to: ["sales@buildyourway.agency"],
        subject: `New Lead: ${name} (${service})`,
        html: `
          <h3>New Strategy Call Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Source:</strong> ${lead_source}</p>
          <p><strong>IP:</strong> ${ip_address}</p>
        `,
      });

      // Prospect confirmation
      await resend.emails.send({
        from: "BuildYourWay <hello@buildyourway.agency>",
        to: [email],
        subject: "We received your strategy call request",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to BuildYourWay. Our team is reviewing your project details.</p>
          <p>If you haven't already selected a time for our strategy call, you can do so here: <a href="https://cal.com/buildyourway/30min">Schedule Call</a>.</p>
          <br/>
          <p>Best regards,</p>
          <p>The BuildYourWay Engineering Team</p>
        `,
      });
    } catch (emailError) {
      console.error("Resend Error:", emailError);
    }

    return NextResponse.json({ success: true, leadId: (lead as any)?.id });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
