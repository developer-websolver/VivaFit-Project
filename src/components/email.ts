
import emailjs from "@emailjs/browser";

export interface EmailFormData {
  fullName: string;
  email: string;
  phone: number;
  subject: string;
  message: string;
}

const serviceid = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publickey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (data: EmailFormData) => {
  if (!serviceid || !templateid || !publickey) {
    throw new Error(
      "EmailJS configuration is missing. Check your .env file."
    );
  }

  return emailjs.send(
    serviceid,
    templateid,
    {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    },
    {
      publicKey: publickey,
    }
  );
};
