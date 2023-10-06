'use server'

import  React  from 'react'
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import  ContactFormEmail  from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const sendEmail = formData.get("sendEmail");
    const message = formData.get("message");

    // Simple server-side-validations
    if (!validateString(sendEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalide message"
            
        }
    }
    let data
    try {
        data= await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "ericluke25@gmail.com",
            subject: 'Message from contact form',
            reply_to: sendEmail as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                sendEmail: sendEmail as string,
            })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data,
    };
};

