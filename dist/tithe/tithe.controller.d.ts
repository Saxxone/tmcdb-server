import { TitheService } from './tithe.service';
import { CreateTitheDto } from './dto/create-tithe.dto';
import { UpdateTitheDto } from './dto/update-tithe.dto';
export declare class TitheController {
    private readonly titheService;
    constructor(titheService: TitheService);
    create(createTitheDto: CreateTitheDto): Promise<import("./entities/tithe.entity").Tithe>;
    findAll(): Promise<import("./entities/tithe.entity").Tithe[]>;
    findOne(id: string): string;
    update(id: string, updateTitheDto: UpdateTitheDto): string;
    remove(id: string): string;
}
