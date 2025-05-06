export declare class Message {
    id?: string;
    author: string;
    message: string;
    title: string;
    longitude?: number;
    latitude?: number;
}
export declare class UpdateMessage extends Message {
}
export declare class CreateMessage extends Message {
}
