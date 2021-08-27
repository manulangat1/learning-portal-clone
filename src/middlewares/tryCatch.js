import errorHandler from '../helpers/errorHandler'

class tries{
    static async tryCatching(req,res,next){
        try {
            next()
        } catch (error) {
            return errorHandler.handleError(error.message, 500, res)
        }
    }
}
export default tries;