import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
export declare class FamiliesService {
    create(createFamilyDto: CreateFamilyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFamilyDto: UpdateFamilyDto): string;
    remove(id: number): string;
}
