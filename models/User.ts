export default class {
    userId: string
    name: string
    avator: string
    updatedAt: string

    constructor() {
        this.userId = localStorage.getItem("userId") as string
        if (!this.userId) {
            var strong = 1000;
            this.userId = new Date().getDate().toString(16) + Math.floor(strong * Math.random()).toString(16)
            localStorage.setItem("userId", this.userId)
        }

        this.name = "random name"
        this.avator = "🐴"
        this.updatedAt = new Date().toString()
    }
}