import { useCallback, useMemo, useState } from "react";
import useLocalstorage from "../customHook/useLocalstorage";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
};

const Task = () => {
    const [task, setTask] = useLocalstorage('TaskItem', [])
    const [formData, setFormdata] = useState({ title: '', description: '', category: '', priority: '', status: '' })
    const [error, setError] = useState({ title: '', description: '', category: '', priority: '', status: '' })
    const [editId, setEditId] = useState('')
    const [category, setCategory] = useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')
    const [sorting, setSorting] = useState('')
    const [sortByTime, setSortByTime] = useState('')

    const [filter, setFilter] = useState({
    category: '',
    status: '',
    priority: '',
    sorting: '',
    sortByTime: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setError((prev) => ({ ...prev, [name]: '' }))
        setFormdata({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newError = { title: '', description: '', category: '', priority: '', status: '' }
        if (formData.title.trim().length < 3 || formData.title.trim().length > 100) {
            newError.title = "Title must be between 3 and 100 characters"
        }
        if (!formData.category.trim()) {
            newError.category = 'category can not be empty '
        }
        if (!formData.priority.trim()) {
            newError.priority = 'priority can not be empty '
        }
        if (!formData.status.trim()) {
            newError.status = 'status can not be empty '
        }
        if (!formData.description.trim() || formData.description.trim().length > 500) {
            newError.description = 'Description can not be empty but it should be less then 500char'
        }
        if (Object.values(newError).some(Boolean)) {
            setError(newError)
            return
        }


        if (editId) {
            setTask(task.map((item) => item.id === editId ? {
                ...item, title: formData.title, description: formData.description,
                category: formData.category,
                priority: formData.priority,
                status: formData.status
            } : item))
            setEditId(null)
        }
        else {
            const newTask = {
                id: Date.now(),
                title: formData.title,
                description: formData.description,
                category: formData.category,
                priority: formData.priority,
                status: formData.status,
                createdDate: new Date().getTime()
            }
            setTask([...task, newTask])
        }
        setFormdata({ title: '', description: '', category: '', priority: '', status: '' })
    }

    const remove = useCallback((id) => {
        setTask(task.filter((item) => item.id !== id));
    }, [task]);

    const edit = useCallback((id) => {
        const editExistingTask = task.find((item) => item.id === id);
        if (editExistingTask) {
            setFormdata({
                title: editExistingTask.title,
                description: editExistingTask.description,
                category: editExistingTask.category,
                priority: editExistingTask.priority,
                status: editExistingTask.status,
            });
            setEditId(id);
        }
    }, [task]);

    const updateStatus = useCallback((id) => {
        setTask(task.map((item) => {
            if (item.id === id) {
                let nextstatus = item.status === 'Todo' ? 'In Progress' : item.status === 'In Progress' ? 'Completed' : 'Todo';
                return { ...item, status: nextstatus };
            }
            return item;
        }));
    }, [task]);
    const filterData = useMemo(() => {
    let filtered = [...task];
    if (filter.category) filtered = filtered.filter(item => item.category === filter.category);
    if (filter.status) filtered = filtered.filter(item => item.status === filter.status);
    if (filter.priority) filtered = filtered.filter(item => item.priority === filter.priority);
    if (filter.sorting === 'A-Z ORDER') filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    if (filter.sorting === 'Z-A ORDER') filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
    if (filter.sortByTime === 'NEWEST') filtered = filtered.sort((a, b) => b.createdDate - a.createdDate);
    if (filter.sortByTime === 'OLDEST') filtered = filtered.sort((a, b) => a.createdDate - b.createdDate);
    return filtered;
    }, [task, filter]);
        return (
            <div className="min-h-screen bg-gray-50 py-8 px-2 md:px-0">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Task Management</h1>
                    <TaskFilter filter={filter} setFilter={setFilter}/>
                    <TaskForm
                        formData={formData}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        error={error}
                    />
                    <TaskList
                        formatDate={formatDate}
                        filterData={filterData}
                        updateStatus={updateStatus}
                        edit={edit}
                        remove={remove}
                    />
                </div>
            </div>
        );
}

export default Task