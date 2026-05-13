import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)


export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        
        const { fullname, email, phone, message } = req.body;

        await resend.email.send({
            from: "Inquiry <onboarding@resend.dev>",
            to: "yourbusinessemail@gmail.com",
            subject: "New Website Inquiry",

            html: `
                <h2></h2>
                <p><b>Name:</b> ${fullname}</p>
                <p><b>Email:</b> ${email}<p/>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Message:</b> ${message}</p>
            `
        })

        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}