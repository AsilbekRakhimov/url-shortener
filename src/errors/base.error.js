export class BaseError extends Error{
    constructor(){
        super()
        this.isError = true
    }
}