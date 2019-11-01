import { Injectable, Inject } from '@nestjs/common';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>) {
    }

    async findAll(): Promise<Event[]> {
        return await this.eventRepository.find();
    }
}
