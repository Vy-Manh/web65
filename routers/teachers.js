import express from "express";

const router = express.Router();

const teachers = [
    {
        id:1,
        name: 'teacher 1'
    },
    {
        id:2,
        name: 'teacher 2'
    },
    {
        id:3,
        name: 'teacher 3'
    },
];

router.get ('/',(req,res) => {
    res.status(200).send(teachers);
});

router.get('/:id',(req,res) => {
    const teacher = teachers.find(
        (teacher) => teacher.id === Number(req.params.id)
    );

    res.status(200).send(teacher);
});

router.post('/',(req,res) => {
    const id = req.params.id;
    const newTeachers = teachers.map(teacher => {
        if (teacher.id === Number(id)) return req.body;
        else return teacher;
    })
    res.status(200).json(newTeachers)
});
router.put('/:id',(req,res) => {
    const id = Number(req.params.id);
    const teacherEdit = teachers.find(teacher => {
        return teacher.id === id;
    })
    const index = teachers.indexOf(teacherEdit);
    const newTeacherEdit = {
        id,
        ...teacherEdit,
        ...req.body
    }
    teachers.splice(index,1,newTeacherEdit);
    res.status(200).json(teachers);
})

router.patch('/:id',(req,res) => {
    const id = Number(req.params.id);
    const teacherEdit = teachers.find(teacher => {
        return teacher.id === id;
    })
    const index = teachers.indexOf(teacherEdit);
    const newTeacherEdit = {
        id,
        ...teacherEdit,
        ...req.body
    }
    teachers.splice(index,1,newTeacherEdit);
    res.status(200).json(teachers);
})

router.delete('/:id',(req,res) => {
    const id = Number(req.params.id);
    const teacherDelete = teachers.find(teacher => {
        return teacher.id === id;
    })
    const index = teachers.indexOf(teacherDelete);
    teachers.splice(index,1);
    res.status(200).json(teachers);
})

export default router;
