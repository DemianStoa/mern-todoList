import express from "express"
import { getLists, createList, updateList, deleteList } from "../cotroller/list.js"

const router = express.Router()

router.get('/', getLists);
router.post('/create', createList);
router.patch('/update', updateList);
router.delete('/:id', deleteList);

export default router;