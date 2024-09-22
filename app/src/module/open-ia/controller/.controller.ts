import { Body, Controller, Post } from '@nestjs/common'

import { SendPromptRequest } from '../request/send.prompt.request'
import { SendPromptResponse } from '../response/send.prompt.response'

@Controller('/open')
export class OpenIaController {
  constructor() {}

  @Post()
  sendPrompt(@Body() request: SendPromptRequest): Promise<SendPromptResponse> {
    const { prompt } = request
  }
}
