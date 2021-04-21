const Task = require('../models/Task');

const list = async (req, res) => {
  try {
    const tasks = await Task.find()
    return res.json(tasks);
  } catch (error) {
    console.log(error)
    return res.status(500).send();
  }
}

const add = async (req, res) => {
  try {
    const { title, isComplete } = req.body;
    const task = new Task({ title, isComplete });
    await task.save();
    return res.status(201).send(task);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

const show = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id)
    if (!task)
      return res.status(404).send({ error: 'Task not found' });
    return res.send(task);
  } catch (error) {
    res.status(500).send();
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, isComplete } = req.body;
    const task = await Task.findByIdAndUpdate(
      id,
      { title, isComplete },
      { new: true }
    );
    if (!task)
      return res.status(404).send({ error: 'Task not found' });
    return res.send(task);
  } catch (error) {
    res.status(500).send();
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task)
      return res.status(404).send({ error: 'Task not found' });
    return res.send(task);
  } catch (error) {
    res.status(500).send();
  }
}

module.exports = { list, add, show, update, remove };