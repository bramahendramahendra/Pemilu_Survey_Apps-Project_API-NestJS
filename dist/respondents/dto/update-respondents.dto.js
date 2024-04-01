"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRespondentsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_respondents_dto_1 = require("./create-respondents.dto");
class UpdateRespondentsDto extends (0, mapped_types_1.PartialType)(create_respondents_dto_1.CreateRespondentsDto) {
}
exports.UpdateRespondentsDto = UpdateRespondentsDto;
//# sourceMappingURL=update-respondents.dto.js.map