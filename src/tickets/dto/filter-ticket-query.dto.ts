import { IsIn, IsOptional } from "class-validator"

export class FilterTicketQueryDto {
    @IsOptional()
    @IsIn(['open','closed'])
    status?:'open'|'closed'
    @IsOptional()
    @IsIn(['high','medium','low'])
    priority?:'high'|'medium'|'low'
}
