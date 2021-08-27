import auth from './auth';
import profile from './profile';
import jobPosts from './jobPosts';
import posts from './Posts'

const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, auth);
    app.use(apiPrefix, profile);
    app.use(apiPrefix, jobPosts);
    app.use(apiPrefix,posts)
    return app;
}

export default routes;