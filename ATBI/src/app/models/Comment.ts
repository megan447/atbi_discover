import {User} from "./User";

export class Comment {
    _id: string;
    // object id, can be article, post, blog, businessman
    object_id: string;
    // comment content text
    content: string;
    // comment likes
    like: number;
    // Mixed parent, can be [comment objects] or [comment _id(s)} or null - 1st level
    parent: Comment;
    // Mixed children, can be [comment objects] or [comment _id(s)}
    children: any;
    // Generated
    date: Date;
    // For notifications && poster preview
    fromUser: User;
    toUser: User;
    // For deleted
    status: number;
}


