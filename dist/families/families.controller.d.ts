import { FamiliesService } from './families.service';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
export declare class FamiliesController {
    private readonly familiesService;
    constructor(familiesService: FamiliesService);
    create(createFamilyDto: CreateFamilyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFamilyDto: UpdateFamilyDto): string;
    remove(id: string): string;
}
