import { Module } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { BcryptingHashingSerice } from './hashing/bcrypt-hashing.service';

@Module({
  providers: [
    {
      provide: HashingService,
      useClass: BcryptingHashingSerice,
    },
  ],
  exports: [HashingService],
})
export class CommonModule {}
