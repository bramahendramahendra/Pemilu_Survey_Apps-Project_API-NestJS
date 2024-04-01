import { FormQuestions } from "src/form-questions/entities/form-questions.entity";
import { StatusActivated } from "src/status-activated/entities/status-activated.entity";
export declare class FormAnswers {
    id: number;
    id_form_questions: number;
    answer: string;
    order: string;
    id_activated: number;
    poin: number;
    created_at: Date;
    updated_at: Date;
    formQuestions: FormQuestions;
    statusActivated: StatusActivated;
}
