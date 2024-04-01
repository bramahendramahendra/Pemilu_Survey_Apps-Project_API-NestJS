import { FormAnswers } from "src/form-answers/entities/form-answers.entity";
import { Respondents } from "src/respondents/entities/respondents.entity";
import { Surveyors } from "src/surveyors/entities/surveyors.entity";
export declare class RespondentAnswers {
    id: number;
    id_respondents: number;
    id_surveyors: number;
    id_form_answers: number;
    answer: string;
    poin: number;
    created_at: Date;
    updated_at: Date;
    respondents: Respondents;
    surveyors: Surveyors;
    formAnswers: FormAnswers;
}
