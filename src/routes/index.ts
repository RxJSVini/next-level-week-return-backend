import { Router, Request, Response } from "express";
import { NodemailerMailerAdapter } from "../adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "../prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "../use-cases/submit-feedback-use-case";

const routes = Router();


routes.get("/feedbacks", (req: Request, res: Response) => {
    return res.status(200).json({
        ok: true
    })
})

routes.post("/feedbacks", async (req: Request, res: Response) => {
    const { comment, type, screenshot } = req.body;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailerAdapter = new NodemailerMailerAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailerAdapter

    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    });


    return res.status(200).json({
        message: "Feedback enviado com sucesso!"
    });


});

export { routes };