export abstract class CBMessage{
    gameNum: number
    playerNum: number

}

export class Prompt extends CBMessage{

    constructor()
}

export class Notification extends CBMessage{

    constructor()
}

export class Response extends CBMessage{

    constructor()
}