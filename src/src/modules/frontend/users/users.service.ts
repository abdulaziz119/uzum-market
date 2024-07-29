import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from '../../../entity/users.entity';
import { ErrorService } from '../../../utils/error.service';
import { MODELS } from '../../../constants';
import { SingleResponse, UserCreateFrontendDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(MODELS.USERS)
    private readonly usersRepo: Repository<UsersEntity>,
    readonly errorService: ErrorService,
  ) {}

  // async createDashboard(payload: any): Promise<SingleResponse<ChatEntity>> {
  //   const ChatModule = new ChatEntity();
  //   ChatModule.uuid = payload.uuid;
  //   ChatModule.message_from = payload?.message_from;
  //   ChatModule.message_to = payload?.message_to;
  //   ChatModule.type = payload?.type;
  //   try {
  //     const result: any = await this.chatRepo.save(ChatModule);
  //     return { result };
  //   } catch (error) {
  //     this.errorService.handleHttpException(error, 'Failed to create a Chat');
  //   }
  // }

  async register(
    payload: UserCreateFrontendDto,
  ): Promise<SingleResponse<UsersEntity>> {
    const UsersModule = new UsersEntity();
    UsersModule.email = payload.email;
    UsersModule.password = payload.password;
    UsersModule.user_type = payload.user_type;
    UsersModule.first_name = payload.first_name;
    UsersModule.last_name = payload.last_name;
    UsersModule.language = payload?.language;
    try {
      return { result: await this.usersRepo.save(UsersModule) };
    } catch (error) {
      this.errorService.handleHttpException(error, 'Failed to create a User');
    }
  }

  // async update(payload: ChatUpdateDto): Promise<SingleResponse<ChatEntity>> {
  //   const { id, ...updates } = payload;
  //
  //   try {
  //     const chat = await this.chatRepo.findOne({
  //       where: { id },
  //     });
  //
  //     if (!chat) {
  //       throw new NotFoundException(`Chat with ID ${id} not found`);
  //     }
  //     Object.assign(chat, updates);
  //     const updatedChat = await this.chatRepo.save(chat);
  //
  //     return { result: updatedChat };
  //   } catch (error) {
  //     this.errorService.handleHttpException(error, 'Failed to update the Chat');
  //   }
  // }
  // // async update(payload: ChatUpdateDto): Promise<SingleResponse<ChatEntity>> {
  // //   const { id } = payload;
  // //
  // //   const Chat = await this.chatRepo.findOne({
  // //     where: { id },
  // //   });
  // //
  // //   if (!Chat) {
  // //     throw new NotFoundException(`Chat with ID ${id} not found`);
  // //   }
  // //   try {
  // //     Object.entries(Chat).forEach(([key, value]) => {
  // //       Chat[key] = payload[key] || value;
  // //     });
  // //     return { result: await this.chatRepo.save(Chat) };
  // //   } catch (error) {
  // //     this.errorService.handleHttpException(error, 'Failed to update the Chat');
  // //   }
  // // }
  //
  // async findOneBy(payload: PaginationParams): Promise<any> {
  //   const { chat_id, limit = 10, page = 1 } = payload;
  //   try {
  //     const count = await this.chatRepo.countBy({ id: chat_id });
  //     if (!count) {
  //       return getPaginationResponse([], page, limit, count);
  //     }
  //     const offset = (page - 1) * limit;
  //     const query = `
  //       SELECT
  //         "chat".*,
  //         COALESCE(JSON_AGG(
  //                      JSON_BUILD_OBJECT(
  //                          'id', messages.id,
  //                          'uuid', messages.uuid,
  //                          'user_id', messages.user_id,
  //                          'chat_id', messages.chat_id,
  //                          'parent_id', messages.parent_id,
  //                          'user_type', messages.user_type,
  //                          'message', messages.message,
  //                          'is_read', messages.is_read,
  //                          'created_at', messages.created_at,
  //                          'upload_id', messages.upload_id
  //                      ) ORDER BY messages.created_at DESC
  //                  ), '[]') AS messages
  //       FROM
  //         "chat-service"."chats" AS "chat"
  //           LEFT JOIN
  //         "chat-service"."messages" AS messages ON messages.chat_id = "chat".id
  //       WHERE
  //         "chat".id = $1
  //       GROUP BY
  //         "chat".id
  //       ORDER BY
  //         "chat".created_at DESC
  //         LIMIT $2 OFFSET $3;
  //     `;
  //     const chatData = await this.chatRepo.query(query, [
  //       chat_id,
  //       limit,
  //       offset,
  //     ]);
  //
  //     if (limit && !isNaN(page)) {
  //       return getPaginationResponse<ChatEntity>(chatData, page, limit, count);
  //     }
  //   } catch (error) {
  //     this.errorService.handleHttpException(error, 'Failed to fetch chat data');
  //   }
  // }
  //
  // async delete(games: any): Promise<DeleteResult> {
  //   const { id } = games;
  //   return await this.chatRepo.softDelete(id);
  // }
}
