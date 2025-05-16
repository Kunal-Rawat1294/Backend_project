class ApiResponse{
    constructor(statusCode,message,data = "Success"){
        this.statusCode = statuscode
        this.data = data
        this.message = message
        this.success = statusCode  < 400
    }
}