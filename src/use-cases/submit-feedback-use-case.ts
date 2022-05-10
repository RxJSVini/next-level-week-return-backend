import { MailerAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export interface SubmitFeedBackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailerAdapter: MailerAdapter,
    ) { }


    async execute(request: SubmitFeedBackUseCaseRequest) {
        const { type, comment, screenshot } = request;


        if (!type) {
            throw new Error("Type is required");
        }
        if (!comment) {
            throw new Error("Comment is required");
        }

        if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
            throw new Error("Invalid screenshot format.");
        }

        await this.feedbackRepository.create({
            type, comment, screenshot
        })


        await this.mailerAdapter.sendMail({
            subject: "Novo Feedback",
            body: `
                <div style="font-family:sans-serif;font-size:16px color:#111;">
                    <p>Tipo de Feedback:${type}</p>
                    <p>Comentário do Feedback:${comment}</p>
                    <p>screenshot:${screenshot}</p>
                </div>
            `

        })

    }




};
