/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { from, identity, Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}
  @Post()
  create(@Body() feedPost: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(feedPost);
  }

  @Get()
  findAll(): Observable<FeedPost[]> {
    return this.feedService.findAllPosts();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() newPost: FeedPost,
  ): Observable<UpdateResult> {
    return from(this.feedService.updatePost(id, newPost));
  }
}
