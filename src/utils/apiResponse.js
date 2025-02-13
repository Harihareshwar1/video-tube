class ApiResponse{
    constructor(status, data ,message="ok"){
        this.status = status;
        this.message = message ;
        this.data = data;
        this.success = this.status < 400;
    }
}
export {ApiResponse}