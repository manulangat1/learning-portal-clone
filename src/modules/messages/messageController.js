import { response } from 'express';
import { Message } from '../../database/models'
import responseHandler from '../../helpers/responseHandler';



class messageController {

    static async loadMessages(req,res){
        const messages = await Message.findAll({where:{from:req.user.id, to:req.params.id}});
        return responseHandler(res,"Messages Loaded successfully",200,messages)
    }
    static async createMessage(req,res){
        const message = await Message.create({
            to:req.params.id,
            from:req.user.id,
            message:req.body.message
        });
        return responseHandler(res,"Message created",201,message)
    }
    static async deleteMessage(req,res){
        const message = await Message.findByPk(req.params.id);
        await message.destroy();
        return responseHandler(res,"Message deleted",200,"Message deleted")
    }
}

export default messageController;