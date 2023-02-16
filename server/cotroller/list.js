import List from "../models/List.js"

export const getLists = async (req, res) => {
    try{
        const lists = await List.find().sort("createAt")

        res.status(200).json(lists)
    } catch(err){
        res.status(404).json({ message: err.message})
    }
}

export const createList = async (req, res) => {
    try{
        const { text } = req.body;
        const list = await List.create({
            text: text,
        })
        res.status(200).json(list)
    } catch(err){
        res.status(404).json({ message: err.message})
    }
}

export const updateList = async (req, res) => {
    try{
        const { _id, text, isCompleted } = req.body;


        const list = await List.findById(_id)
        list.text = text;
        list.isCompleted = isCompleted;
    
        const updatedList = await list.save()

        res.status(200).json(updatedList)
    } catch(err){
        res.status(404).json({ message: err.message})
    }
}

export const deleteList = async (req, res) => {
     try{
        const id = req.params.id
        const list = await List.findById(id)
        console.log(list)
        await list.remove();
        res.status(200).json({ message: "list deleted"})
     } catch(err){
        res.status(404).json({ message: err.message})
     }
}
