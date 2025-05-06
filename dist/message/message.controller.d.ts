import { MessageService } from './message.service';
import { CreateMessage, UpdateMessage } from './message.model';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    getMessages(): Promise<any>;
    getMessage(messageId: string): Promise<import("./message.model").Message | undefined>;
    updateMessage(messageId: string, updateMessage: UpdateMessage): Promise<void>;
    deleteMessage(messageId: string): Promise<void>;
    addMessage(message: CreateMessage): Promise<{
        id: string;
        author: string;
        message: string;
        title: string;
        longitude?: number;
        latitude?: number;
    }>;
}
