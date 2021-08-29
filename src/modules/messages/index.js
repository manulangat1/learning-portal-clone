import express from 'express'
import AuthMiddleware from '../../middlewares/authMiddleware';
import tries from '../../middlewares/tryCatch';
import messageController from './messageController';


const Router = express.Router()

Router.get('/messages/:id',AuthMiddleware.isAuth,tries.tryCatching,messageController.loadMessages);
Router.post('/message/:id',AuthMiddleware.isAuth,tries.tryCatching,messageController.createMessage);
Router.delete('/message/:id',AuthMiddleware.isAuth,tries.tryCatching,messageController.deleteMessage);


export default Router;