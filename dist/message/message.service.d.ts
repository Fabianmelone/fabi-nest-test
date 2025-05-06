import { Message, UpdateMessage } from './message.model';
export declare class MessageService {
    getMessages(): Promise<Message[]>;
    addMessage(message: Message): Promise<{
        id: string;
        author: string;
        message: string;
        title: string;
        longitude?: number;
        latitude?: number;
    }>;
    removeMessage(messageId: string): Promise<void>;
    updateMessage(messageId: string, updateMessage: UpdateMessage): Promise<void>;
    getMessage(messageId: string): Promise<Message | undefined>;
}
