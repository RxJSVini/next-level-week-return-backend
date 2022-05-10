import { SubmitFeedbackUseCase, SubmitFeedBackUseCaseRequest } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create:createFeedbackSpy},
    { sendMail: sendMailSpy }
)



describe("Submit feedback", () => {
    it("Should be able to submit a feedback", () => {

        expect(submitFeedback.execute({
            type:'BUG',
            comment:"Exemplo de comentário",
            screenshot:"data:image/png;base64;7324wiusndha",
        })).resolves.not.toThrow();
    })

    it("shound not be able to submit feedback without a type", async () =>{
        await expect(submitFeedback.execute({
            type:'',
            comment:"Exemplo de comentário",
            screenshot:"teste",

        })).resolves.toThrow();
    })

    it("shout not be able to submit a feedback whithout comment", async() =>{
        await expect(submitFeedback.execute({
            type:"",
            comment:"",
            screenshot:""
        })).rejects.toThrow();
    })


});