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

const Create = ({ auth, courses, authors }) => {
    const { data, setData, post, errors, reset, processing } = useForm({
        accession_no: "",
        author_id: "",
        title: "",
        year: "",
        copies: "",
        date_process: "",
        page_number: "",
        course_id: "",
        files: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("thesis.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h2 className="font-semibold text-lg text-green-100 leading-tight">
                        Add Thesis
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
                                    File
                                </Typography>
                                <Input
                                    type="file"
                                    onChange={(e) =>
                                        setData("files", e.target.files[0])
                                    }
                                    error={errors.files}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Authors
                                </Typography>
                                <Select
                                    label="Select Author"
                                    size="md"
                                    value={data.author_id}
                                    onChange={(value) =>
                                        setData("author_id", value)
                                    }
                                    error={errors.author_id}
                                >
                                    {authors.map((authors) => (
                                        <Option
                                            key={authors.id}
                                            value={authors.id.toString()}
                                        >
                                            {authors.firstname}{" "}
                                            {authors.middlename}{" "}
                                            {authors.lastname}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Courses
                                </Typography>
                                <Select
                                    label="Select Course"
                                    size="md"
                                    value={data.course_id}
                                    onChange={(value) =>
                                        setData("course_id", value)
                                    }
                                    error={errors.course_id}
                                >
                                    {courses.map((course) => (
                                        <Option
                                            key={course.id}
                                            value={course.id.toString()}
                                        >
                                            {course.course_name}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-3 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Accession No
                                </Typography>
                                <Input
                                    size="md"
                                    value={data.accession_no}
                                    onChange={(e) =>
                                        setData("accession_no", e.target.value)
                                    }
                                    error={errors.accession_no}
                                />
                            </div>
                            <div className="col-span-3">
                                <Typography variant="h6" color="blue-gray">
                                    Title
                                </Typography>
                                <Input
                                    size="md"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    error={errors.title}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Year
                                </Typography>
                                <Input
                                    type="number"
                                    size="md"
                                    value={data.year}
                                    onChange={(e) =>
                                        setData("year", e.target.value)
                                    }
                                    error={errors.year}
                                />
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Copy
                                </Typography>
                                <Input
                                    type="number"
                                    size="md"
                                    value={data.copies}
                                    onChange={(e) =>
                                        setData("copies", e.target.value)
                                    }
                                    error={errors.copies}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Page No.
                                </Typography>
                                <Input
                                    type="number"
                                    size="md"
                                    value={data.page_number}
                                    onChange={(e) =>
                                        setData("page_number", e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Date Proccess
                                </Typography>
                                <Input
                                    type="date"
                                    size="md"
                                    value={data.date_process}
                                    onChange={(e) =>
                                        setData("date_process", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <hr className="border-t-3 border-gray-400" />

                        <div className="flex justify-end items-center gap-4 mt-4">
                            <Link href={route("thesis.index")}>
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
                                    <span>Saving...</span>
                                ) : (
                                    <>
                                        <AiOutlineSave className="me-1 text-xl" />
                                        Save
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

export default Create;
