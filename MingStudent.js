/**
 * Created by Administrator on 2017/5/12.
 */
import Student from "./Student";
export default class MingStudent extends Student{
    constructor(){
        super('小明', '男', 18);
        
    }
    getDescription(){
        return "子类哈哈哈"+super.getDescription();
    }
    
}