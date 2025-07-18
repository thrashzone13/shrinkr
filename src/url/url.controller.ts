import { Controller, Get } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Get()
  list() {
    return 'list';
  }
}
