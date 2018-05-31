import {User} from "./User";

export class Post {
    _id: string;
    images: any;
    title: string;
    content: String;
    post_date: Date;
    update_date: Date;
    type: String;
    owner: User;
    like: Number;
    status: Number;
}




