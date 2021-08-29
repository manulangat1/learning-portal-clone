import auth from './auth';
import profile from './profile';
import jobPosts from './jobPosts';
import posts from './Posts'
import messages from './messages'
const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, auth);
    app.use(apiPrefix, profile);
    app.use(apiPrefix, jobPosts);
    app.use(apiPrefix,posts)
    app.use(apiPrefix,messages)
    return app;
}

export default routes;