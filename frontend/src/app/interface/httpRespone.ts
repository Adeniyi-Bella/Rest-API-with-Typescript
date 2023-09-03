import { Patient } from "./patient";

export interface CustomHttpResponse {
    statusCode: number;
    httpStatus: string;
    message: string;
    data: Patient[];
    timeStamp: string;
}