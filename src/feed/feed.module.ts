import { Module } from '@nestjs/common';
import { FeedService } from './servies/feed.service';

@Module({
  providers: [FeedService]
})
export class FeedModule {}
