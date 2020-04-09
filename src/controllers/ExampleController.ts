import Controller from "./Controller";
import { OK } from "http-status-codes";

export default class ExampleController extends Controller {
    greet = () => {
        return this.res.status(OK).json({ hello: 'world' });
    }


}