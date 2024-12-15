import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Typography,
    Tooltip,
    Spinner,
} from "@material-tailwind/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import useAppUrl from "@/hooks/useAppUrl";

const TABLE_HEAD = ["Course Name", "Acronym", ""];

const Index = ({ auth }) => {
    const API_URL = useAppUrl();
    const queryClient = useQueryClient(); // Initialize queryClient to manage cache

    const fetchCourses = async ({ queryKey }) => {
        const [_key] = queryKey; // You can add more destructured values if needed
        const response = await axios.get(`${API_URL}/api/get_courses`);
        return response.data.courses; // Assuming the response data contains an array of departments
    };

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["courses"],
        queryFn: fetchCourses,
        keepPreviousData: true,
    });

    // Deleting a department with cache invalidation
    const deleteStrand = async (courselId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this strand?"
        );
        if (confirmDelete) {
            try {
                const response = await axios.delete(
                    `/admin/courses/${courselId}`
                );
                alert("Course was deleted successfully");

                // Invalidate the 'departments' cache after deletion to ensure the list is refreshed
                queryClient.invalidateQueries(["courses"]);
            } catch (error) {
                console.error(error);
                alert(
                    "Error deleting strand: " + error.response?.data?.message ||
                        error.message
                );
            }
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-green-100">
                    Courses
                </h2>
            }
        >
            <Head title="Courses" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Card className="h-full w-full">
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    className="rounded-none"
                                >
                                    <div className="mb-2 flex items-center justify-between gap-8">
                                        <Typography
                                            variant="h5"
                                            color="blue-gray"
                                        >
                                            Courses
                                        </Typography>
                                        <Link href={route("courses.create")}>
                                            <Button
                                                color="blue"
                                                className="flex items-center gap-1 rounded"
                                                size="sm"
                                            >
                                                <AiOutlinePlus
                                                    strokeWidth={2}
                                                    className="h-5 w-5"
                                                />
                                                Add Course
                                            </Button>
                                        </Link>
                                    </div>
                                </CardHeader>

                                <CardBody className="px-0">
                                    <table className="mt-4 w-full text-left table-layout">
                                        <thead>
                                            <tr>
                                                {TABLE_HEAD.map(
                                                    (header, index) => (
                                                        <th
                                                            key={index}
                                                            className="border border-blue-gray-100 bg-blue-gray-50/50 p-3"
                                                        >
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-semibold leading-none"
                                                            >
                                                                {header || ""}
                                                            </Typography>
                                                        </th>
                                                    )
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isLoading ? (
                                                <tr>
                                                    <td
                                                        colSpan={
                                                            TABLE_HEAD.length
                                                        }
                                                        className="border border-blue-gray-100"
                                                    >
                                                        <div className="flex justify-center items-center h-full">
                                                            <Spinner
                                                                className="h-10 w-10"
                                                                color="green"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ) : (
                                                data?.map(
                                                    (
                                                        {
                                                            id,
                                                            course_name,
                                                            acronym,
                                                        },
                                                        index
                                                    ) => (
                                                        <tr
                                                            key={index}
                                                            className="hover:bg-blue-gray-50"
                                                        >
                                                            <td className="border border-blue-gray-100 px-2">
                                                                <Typography
                                                                    variant="small"
                                                                    className="font-normal text-gray-800"
                                                                >
                                                                    {
                                                                        course_name
                                                                    }
                                                                </Typography>
                                                            </td>
                                                            <td className="border border-blue-gray-100 px-2">
                                                                <Typography
                                                                    variant="small"
                                                                    className="font-normal text-gray-800"
                                                                >
                                                                    {acronym}
                                                                </Typography>
                                                            </td>

                                                            <td className="border border-blue-gray-100 py-2 px-4 w-[10%]">
                                                                <div className="flex items-center gap-2">
                                                                    <Tooltip content="Edit Material">
                                                                        <Link
                                                                            className="hover:bg-blue-800 hover:rounded hover:text-white"
                                                                            href={route(
                                                                                "courses.edit",
                                                                                {
                                                                                    id,
                                                                                }
                                                                            )}
                                                                        >
                                                                            <BiEdit className="text-2xl" />
                                                                        </Link>
                                                                    </Tooltip>
                                                                    <Tooltip content="Delete Material">
                                                                        <button
                                                                            className="text-red-800 hover:bg-blue-800 hover:rounded"
                                                                            onClick={() =>
                                                                                deleteStrand(
                                                                                    id
                                                                                )
                                                                            }
                                                                        >
                                                                            <AiOutlineDelete className="text-2xl font-bold" />
                                                                        </button>
                                                                    </Tooltip>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
