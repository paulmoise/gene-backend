import express from 'express'
import createModel from './crud.model';


function crudCtrl(route) {
    const router = express.Router();
    const model = createModel(route);

    router.get('/', async (req, res) => {
        const data = await model.find({});
        console.log(data)
        res.status(200).json(data)
    });

    router.get('/:id', async (req, res) => {
        const data = await model.findById(req.params.id)
        if (!data) res.status(404).json({ message: 'Not found!' });
        res.status(200).json(data);
    })

    router.post('/', async (req, res) => {
        try {
            const newData = new model({ ...req.body })
            await newData.save()
            res.status(201).json({ message: 'Item Created!', id: newData._id });
        } catch (e) {
            res.status(422).json(e)
        }
    });

    router.delete('/:id', async (req, res) => {

        try {
            await model.deleteOne({ _id: req.params.id })
            res.status(200).json({ message: 'Item deleted!' });
        } catch (e) {
            res.status(422).json(e)
        }
    });

    router.put('/:id', async (req, res) => {

        delete req.body._id;
        try {
            await model.updateOne({ _id: req.params.id }, {...req.body})
            res.status(200).json({ message: 'Item Updated!' });
        } catch (e) {
            res.status(422).json(e)
        }
    });

    return router;
}
export default crudCtrl;