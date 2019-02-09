import { Prompt, Notification } from "./abstIOMessages";

export abstract class CBClient{

    public constructor()
    public start():void
    public receivePrompt(p: Prompt):void
    public receiveNotification(n: Notification): Notification

}