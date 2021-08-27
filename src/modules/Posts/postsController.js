import { Posts, ChatRoom , ChatAsses} from '../../database/models';
import responseHandler from '../../helpers/responseHandler';
import errorHandler from '../../helpers/errorHandler'

class postController{
    static async createPosts(req,res){
        try{
            const post = await Posts.create({
                UserId:req.user.id,
                title:req.body.title,
                description:req.body.description
            })
            return  responseHandler(res,'Post created',201,post)
        } catch (error){
            return errorHandler.handleError(error, 500, res);
        }
    }

    static async createRooms(req,res){
        try{
            const room = await ChatRoom.findOne({where:{name:req.body.name}},{raw:true});
            console.log(room)
            if (room){
                const users = await ChatAsses.findOne({where:{ChatRoomId:room.dataValues.id,UserId:req.user.id}})

                if (users){
                    return responseHandler(res,'Already a member',200,'Already a member')
                    
                }
                await  ChatAsses.create({ChatRoomId:room.dataValues.id,UserId:req.user.id})
                return responseHandler(res,'Added',200,room)
                
            }
            const newRoom = await ChatRoom.create({name:req.body.name})
            await ChatAsses.create({ChatRoomId:newRoom.dataValues.id,UserId:req.user.id})
            return responseHandler(res,'Added',200,newRoom)
        } catch (error){
            return errorHandler.handleError(error.message, 500, res);
        }
    }
    static async joinChatRoomById(req,res){
        try{
            const chatRoom = await ChatRoom.findById(req.params.id);
            if (req.params.action === "join"){
                 await ChatAsses.create({ChatRoomId:chatRoom.dataValues.id,UserId:req.user.id});
            } else {
                await chatRoom.destroy()
            }
            
            return responseHandler(res,'Joined successfully',200, req.user)
        } catch(error){
            return errorHandler.handleError(error.message,500,res)
        }
    }

    static async fetchPosts(req,res){
        const posts = await Posts.findAll({where:{UserId:req.user.id}})
        return responseHandler(res,"Loaded successfully",200,posts)
    }
}

export default postController