import { FeedbackCreateData, FeedbacksRepository} from "../repositories/feedbacks-repository";
import { prismaClient } from ".";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
   async create({type, comment, screenshot }:FeedbackCreateData){
        await prismaClient.feedback.create({
            data: {
                comment, type,   screenshot,
            }
        });
    }

};