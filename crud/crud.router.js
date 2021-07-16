import crudCtrl from "./crud.ctrl";
import Comment from "./Schemas/Comment";
import Client from "./Schemas/Client";
import Student from "./Schemas/Student";

const routes = [
    { name: 'comments', schema: Comment },
    { name: 'students', schema: Student },
    { name: 'clients', schema: Client }

];

function createCrudRouter(app) {
    for (const r of routes) {
        app.use('/' + r.name, crudCtrl(r))
    }
}

export default createCrudRouter;