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

const Edit = ({ auth, course }) => {
    const { data, setData, patch, errors, reset, processing } = useForm({
        id: course.id,
        course_name: course.course_name || "",
        acronym: course.acronym || "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await patch(route("courses.update", data.id));
            alert("Course was updated successfully");
            reset();
        } catch (error) {
            console.error("Error updating course:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h2 className="font-semibold text-lg text-white leading-tight">
                        Edit Course
                    </h2>
                </div>
            }
        >
            <Head title="Courses" />

            <div className="flex justify-center">
                <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-lg p-6">
                    <form onSubmit={onSubmit} className="mt-8 mb-2">
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Course Name
                            </Typography>
                            <Input
                                size="md"
                                value={data.course_name}
                                onChange={(e) =>
                                    setData("course_name", e.target.value)
                                }
                                error={Boolean(errors.course_name)}
                            />
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Acronym
                            </Typography>
                            <Input
                                size="md"
                                value={data.acronym}
                                onChange={(e) =>
                                    setData("acronym", e.target.value)
                                }
                                error={Boolean(errors.acronym)}
                            />
                        </div>

                        <hr className="border-t-3 border-gray-400 mt-8" />

                        <div className="flex justify-end items-center gap-4 mt-4">
                            <Link href={route("courses.index")}>
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
                                <AiOutlineSave className="me-1 text-lg" />
                                Update
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
