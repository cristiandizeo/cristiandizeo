import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El email no es válido' },
        { status: 400 }
      );
    }

    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      // Opción 1: Gmail
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password de Gmail
      },
      
      // Opción 2: SMTP personalizado
      // host: process.env.SMTP_HOST,
      // port: parseInt(process.env.SMTP_PORT || '587'),
      // secure: false,
      // auth: {
      //   user: process.env.EMAIL_USER,
      //   pass: process.env.EMAIL_PASS,
      // },
    });

    // Email para ti (notificación)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Tu email
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin: 0;">Nuevo mensaje de contacto</h2>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #495057;">Nombre:</strong>
              <span style="color: #333;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #495057;">Email:</strong>
              <span style="color: #333;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #495057;">Asunto:</strong>
              <span style="color: #333;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #495057;">Mensaje:</strong>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-top: 8px; white-space: pre-wrap; color: #333;">${message}</div>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196f3;">
            <small style="color: #1565c0;">
              Este mensaje fue enviado desde tu formulario de contacto el ${new Date().toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}.
            </small>
          </div>
        </div>
      `,
    };

    // Email de confirmación para el usuario
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Confirmación: Hemos recibido tu mensaje - ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background-color: #4f46e5; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">¡Gracias por contactarme!</h2>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef; border-top: none;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Hola <strong>${name}</strong>,
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              He recibido tu mensaje sobre "<strong>${subject}</strong>" y te responderé lo antes posible, 
              generalmente en un plazo de 24-48 horas.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #495057; margin: 0 0 10px 0;">Resumen de tu mensaje:</h4>
              <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4f46e5;">
                <div style="white-space: pre-wrap; color: #333;">${message}</div>
              </div>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Mientras tanto, puedes revisar mis proyectos en 
              <a href="https://github.com/tu-usuario" style="color: #4f46e5;">GitHub</a> 
              o conectarte conmigo en 
              <a href="https://linkedin.com/in/tu-usuario" style="color: #4f46e5;">LinkedIn</a>.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              ¡Gracias por tu interés!<br>
              <strong>Tu Nombre</strong>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6c757d; font-size: 14px;">
            <p style="margin: 0;">
              Este es un mensaje automático de confirmación. Por favor, no respondas a este email.
            </p>
          </div>
        </div>
      `,
    };

    // Enviar ambos emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}