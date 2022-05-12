"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe("Submit feedback", () => {
    it("Should be able to submit a feedback", () => {
        expect(submitFeedback.execute({
            type: 'BUG',
            comment: "Exemplo de comentário",
            screenshot: "data:image/png;base64;7324wiusndha",
        })).resolves.not.toThrow();
    });
    it("shound not be able to submit feedback without a type", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(submitFeedback.execute({
            type: '',
            comment: "Exemplo de comentário",
            screenshot: "teste",
        })).resolves.toThrow();
    }));
    it("shout not be able to submit a feedback whithout comment", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(submitFeedback.execute({
            type: "",
            comment: "",
            screenshot: ""
        })).rejects.toThrow();
    }));
});
