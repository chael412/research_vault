import { AiOutlineSave } from "react-icons/ai";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

const Edit = ({ auth, strands, student }) => {
    const { data, setData, post, errors, reset, processing } = useForm({
        student_no: student.student_no || "",
        grade: student.grade || "",
        firstname: student.firstname || "",
        middlename: student.middlename || "",
        lastname: student.lastname || "",
        birthdate: student.birthdate || "",
        gender: student.gender || "",
        email: student.email || "",
        contact_no: student.contact_no || "",
        address: student.address || "",
        image: "",
        strand_id: student.strand.id.toString() || "",
        _method: "PUT",
    });

    console.log(student);

    const onSubmit = (e) => {
        e.preventDefault();

        

        post(route("student.update", student.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h2 className="font-semibold text-lg text-green-100 leading-tight">
                        Student Registration
                    </h2>
                </div>
            }
        >
            <Head title="Students" />

            <div className="flex justify-center">
                <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-4xl p-6">
                    <form onSubmit={onSubmit} className="mt-8 mb-2">
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Photo
                                </Typography>
                                {student.image && (
                                    <div className="mb-4">
                                        <img
                                            src={student.image}
                                            className="w-64"
                                        />
                                    </div>
                                )}
                                <Input
                                    type="file"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                {errors.image}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Student No.
                                </Typography>
                                <Input
                                    size="md"
                                    placeholder="Student No"
                                    value={data.student_no}
                                    onChange={(e) =>
                                        setData("student_no", e.target.value)
                                    }
                                />
                                {errors.student_no}
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Strands
                                </Typography>
                                <Select
                                    label="Select Course"
                                    size="md"
                                    value={data.strand_id}
                                    onChange={(value) =>
                                        setData("strand_id", value)
                                    }
                                >
                                    {strands.data.map((strand) => (
                                        <Option
                                            key={strand.id}
                                            value={strand.id.toString()}
                                        >
                                            {strand.strand_name}
                                        </Option>
                                    ))}
                                </Select>
                                {errors.strand_id}
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Grade
                                </Typography>
                                <Select
                                    label="Select Grade"
                                    size="md"
                                    value={data.grade}
                                    onChange={(value) =>
                                        setData("grade", value)
                                    }
                                >
                                    <Option value="11">Grade 11</Option>
                                    <Option value="12">Grade 12</Option>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Firstname
                                </Typography>
                                <Input
                                    size="md"
                                    value={data.firstname}
                                    onChange={(e) =>
                                        setData("firstname", e.target.value)
                                    }
                                />
                                {errors.firstname}
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Middlename
                                </Typography>
                                <Input
                                    size="md"
                                    value={data.middlename}
                                    onChange={(e) =>
                                        setData("middlename", e.target.value)
                                    }
                                />
                                {errors.middlename}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Lastname
                                </Typography>
                                <Input
                                    size="md"
                                    value={data.lastname}
                                    onChange={(e) =>
                                        setData("lastname", e.target.value)
                                    }
                                />
                                {errors.lastname}
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Birthdate
                                </Typography>
                                <Input
                                    type="date"
                                    size="md"
                                    value={data.birthdate}
                                    onChange={(e) =>
                                        setData("birthdate", e.target.value)
                                    }
                                />
                                {errors.birthdate}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Gender
                                </Typography>
                                <Select
                                    label="Select Gender"
                                    size="md"
                                    value={data.gender}
                                    onChange={(
                                        value // Updated
                                    ) => setData("gender", value)}
                                >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                                {errors.gender}
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Address
                                </Typography>
                                <Input
                                    size="md"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                />
                                {errors.address}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Contact No.
                                </Typography>
                                <Input
                                    size="md"
                                    value={data.contact_no}
                                    onChange={(e) =>
                                        setData("contact_no", e.target.value)
                                    }
                                />
                                {errors.contact_no}
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Email
                                </Typography>
                                <Input
                                    size="md"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email}
                            </div>
                        </div>

                        <hr className="border-t-3 border-gray-400" />

                        <div className="flex justify-end items-center gap-4 mt-4">
                            <Link href={route("student.index")}>
                                <Button
                                    color="blue-gray"
                                    variant="outlined"
                                    className="rounded"
                                >
                                    Cancel
                                </Button>
                            </Link>

                            <Button
                                type="submit"
                                color="blue"
                                className="rounded flex items-center"
                                disabled={processing}
                            >
                                {processing ? (
                                    <span>Updating...</span>
                                ) : (
                                    <>
                                        <AiOutlineSave className="me-1 text-xl" />
                                        Update
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
