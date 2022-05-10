export interface SendMailData{
    subject:string;
    body:string;
}

export interface MailerAdapter{
    sendMail:(data:SendMailData) => Promise<void>;
}