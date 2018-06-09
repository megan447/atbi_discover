import {User} from "./User";

export class Post {
    _id: string;
    images: any;
    title: string;
    content: string;
    post_date: Date;
    update_date: Date;
    type: string;
    owner: User;
    like: Number;
    status: Number;

    constructor(){
        this.images = [];
    }
}




