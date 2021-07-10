import { CreateTitheDto } from './dto/create-tithe.dto';
import { UpdateTitheDto } from './dto/update-tithe.dto';
import { Repository } from 'typeorm';
import { Tithe } from './entities/tithe.entity';
export declare class TitheService {
    private titheRepository;
    constructor(titheRepository: Repository<Tithe>);
    create(createTitheDto: CreateTitheDto): Promise<Tithe>;
    findAll(): Promise<Tithe[]>;
    findOne(id: number): string;
    update(id: number, updateTitheDto: UpdateTitheDto): string;
    remove(id: number): string;
}
