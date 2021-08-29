import postController from "./postsController";
import express from 'express'
import AuthMiddleware from "../../middlewares/authMiddleware";
import tries from '../../middlewares/tryCatch'
const Router = express.Router()

Router.post('/posts/create', AuthMiddleware.isAuth ,postController.createPosts)
Router.post('/rooms/create', AuthMiddleware.isAuth ,postController.createRooms)
Router.put('/join/:id/:action',AuthMiddleware.isAuth, postController.joinChatRoomById)
Router.get('/posts',AuthMiddleware.isAuth,tries.tryCatching,postController.fetchPosts)
Router.put('/follow/:id',AuthMiddleware.isAuth,tries.tryCatching,postController.toggleFollower)
export default Router;