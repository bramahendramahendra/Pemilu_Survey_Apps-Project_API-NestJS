"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSurveyorsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_surveyors_dto_1 = require("./create-surveyors.dto");
class UpdateSurveyorsDto extends (0, mapped_types_1.PartialType)(create_surveyors_dto_1.CreateSurveyorsDto) {
}
exports.UpdateSurveyorsDto = UpdateSurveyorsDto;
//# sourceMappingURL=update-surveyors.dto.js.map