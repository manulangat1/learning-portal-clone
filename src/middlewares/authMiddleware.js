import jwt from 'jsonwebtoken'
import errorHandler from '../helpers/errorHandler';
import { User} from '../database/models'
class AuthMiddleware{
    static async isAuth(req,res,next){
        try{

            let token = req.headers['authorization'];

            token = token.slice(7, token.length);
            const email = await jwt.verify(token, 'secret').email;

            const user = await User.findOne({
                where: {email: email},
            });

            req.user = user 
            req.token = token
        
            next()

        } catch(error){
            console.log(error)
            return errorHandler.handleError(error.message, 500, res);
        }
    }
}

export default AuthMiddleware