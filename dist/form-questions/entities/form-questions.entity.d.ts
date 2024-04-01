import { StatusActivated } from "src/status-activated/entities/status-activated.entity";
export declare class FormQuestions {
    id: number;
    question: string;
    order: number;
    id_activated: number;
    created_at: Date;
    updated_at: Date;
    statusActivated: StatusActivated;
}
