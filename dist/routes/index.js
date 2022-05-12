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
exports.routes = void 0;
const express_1 = require("express");
const nodemailer_mail_adapter_1 = require("../adapters/nodemailer/nodemailer-mail-adapter");
const prisma_feedbacks_repository_1 = require("../prisma/prisma-feedbacks-repository");
const submit_feedback_use_case_1 = require("../use-cases/submit-feedback-use-case");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get("/feedbacks", (req, res) => {
    return res.status(200).json({
        ok: true
    });
});
routes.post("/feedbacks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comment, type, screenshot } = req.body;
    const prismaFeedbacksRepository = new prisma_feedbacks_repository_1.PrismaFeedbacksRepository();
    const nodemailerMailerAdapter = new nodemailer_mail_adapter_1.NodemailerMailerAdapter();
    const submitFeedbackUseCase = new submit_feedback_use_case_1.SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailerAdapter);
    yield submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    });
    return res.status(200).json({
        message: "Feedback enviado com sucesso!"
    });
}));
