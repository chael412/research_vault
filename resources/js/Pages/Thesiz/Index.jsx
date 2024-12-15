import { AiOutlineFileAdd } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";
import { TiUserDeleteOutline } from "react-icons/ti";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineFolderView } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import { BiBarcodeReader } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";

import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import {
    ChevronUpDownIcon,
    PencilIcon,
    UserPlusIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Avatar,
    IconButton,
    Tooltip,
    CardFooter,
    Spinner,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAppUrl from "@/hooks/useAppUrl";
import { TablePagination } from "@/Components/TablePagination";

const TABLE_HEAD = [
    "Accession No",
    "Author Name",
    "Title",
    "Year",
    "Course",
    "",
];

const Index = ({ auth }) => {
    const API_URL = useAppUrl();

    const fetchThesiz = async ({ queryKey }) => {
        const [_key, page, query, sortColumn, sortDirection] = queryKey;
        const response = await axios.get(`${API_URL}/api/get_thesiz_paginate`, {
            params: {
                page,
                title: query,
                sortColumn,
                sortDirection,
            },
        });
        return response.data;
    };

    const { thesiz } = usePage().props;
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(thesiz?.current_page || 1);
    const [sortConfig, setSortConfig] = useState({
        column: "",
        direction: "asc",
    });

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: [
            "thesiz",
            currentPage,
            searchQuery,
            sortConfig.column,
            sortConfig.direction,
        ],
        queryFn: fetchThesiz,
        keepPreviousData: true,
    });

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value); // Update search query
        if (!value) {
            setCurrentPage(1); // Reset to first page if query is empty
        }
    };

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    const handleSort = (column) => {
        let direction = sortConfig.direction === "asc" ? "desc" : "asc";

        if (column === "Accession No") {
            setSortConfig({ column: "accession_no", direction });
        } else if (column === "Author Name") {
            setSortConfig({ column: "author_lastname", direction });
        } else if (column === "Title") {
            setSortConfig({ column: "title", direction });
        } else if (column === "Year") {
            setSortConfig({ column: "year", direction });
        } else if (column === "Copies") {
            setSortConfig({ column: "copies", direction });
        } else if (column === "Course") {
            setSortConfig({ column: "course", direction });
        } else if (column === "Date Process") {
            setSortConfig({ column: "date_process", direction });
        } else if (column === "Page No") {
            setSortConfig({ column: "page_number", direction });
        }
    };

    const TABLE_ROWS =
        data?.data.map((thesiz) => ({
            id: thesiz.id,
            file: thesiz.files ? `/${thesiz.files}` : null,
            author_name: `${thesiz.author.firstname} ${
                thesiz.author.middlename || ""
            } ${thesiz.author.lastname}`,
            accession_no: thesiz.accession_no,
            title: thesiz.title,
            year: thesiz.year,
            copies: thesiz.copies,
            date_process: thesiz.date_process,
            page_number: thesiz.page_number,
            course: thesiz.course?.acronym,
        })) || [];

    const deleteThesis = async (thesisId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this thesis?"
        );
        if (confirmDelete) {
            try {
                const response = await axios.delete(
                    `/admin/thesis/${thesisId}`
                );
                alert("Thesis deleted successfully!");
                refetch();
            } catch (error) {
                console.log(error);
                alert("Thesis deleted successfully!");
                refetch();
            }
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-green-100 ">
                    Thesis Page
                </h2>
            }
        >
            <Head title="Thesis" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-5">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Card className="h-full w-full">
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    className="rounded-none"
                                >
                                    <div className="mb-8 flex items-center justify-between gap-8">
                                        <div>
                                            <Typography
                                                variant="h5"
                                                color="blue-gray"
                                            >
                                                Thesis List
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                                        <div className="w-full md:w-80 flex">
                                            <Input
                                                label="Search for title..."
                                                value={searchQuery}
                                                onChange={handleSearch}
                                            />
                                        </div>
                                        <div className="flex shrink-0 flex-col gap-6 sm:flex-row">
                                            <a
                                                href="/thesis_print"
                                                target="_blank"
                                            >
                                                <Button
                                                    variant="outlined"
                                                    color="blue-gray"
                                                    className="flex items-center gap-1 rounded"
                                                    size="sm"
                                                >
                                                    <AiOutlinePrinter className="text-2xl" />
                                                    Print
                                                </Button>
                                            </a>
                                            <Link href={route("thesis.create")}>
                                                <Button
                                                    color="blue"
                                                    className="flex items-center gap-1 rounded"
                                                    size="sm"
                                                >
                                                    <AiOutlineFileAdd
                                                        strokeWidth={2}
                                                        className="h-5 w-5"
                                                    />
                                                    Add Thesis
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardBody className="overflow-y-scroll px-0">
                                    <table className="mt-4 w-full min-w-max table-auto text-left">
                                        <thead>
                                            <tr>
                                                {TABLE_HEAD.map(
                                                    (head, index) => (
                                                        <th
                                                            onClick={() =>
                                                                handleSort(head)
                                                            }
                                                            key={head}
                                                            className="border border-blue-gray-100 bg-blue-gray-50/50 p-4 cursor-pointer"
                                                        >
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="flex items-center justify-between gap-2 font-semibold leading-none "
                                                            >
                                                                {head}
                                                                {index !==
                                                                    TABLE_HEAD.length -
                                                                        1 && (
                                                                    <ChevronUpDownIcon
                                                                        strokeWidth={
                                                                            2
                                                                        }
                                                                        className={`h-4 w-4 transform transition-transform ${
                                                                            sortConfig.column ===
                                                                                head && // Use lowercase for comparison
                                                                            sortConfig.direction ===
                                                                                "asc"
                                                                                ? "rotate-180"
                                                                                : ""
                                                                        }`}
                                                                    />
                                                                )}
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
                                                        className="border border-blue-gray-100 p-4"
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
                                                TABLE_ROWS.map(
                                                    (
                                                        {
                                                            id,
                                                            accession_no,
                                                            author_name,
                                                            title,
                                                            year,
                                                            copies,
                                                            date_process,
                                                            course,
                                                            page_number,
                                                            file,
                                                        },
                                                        index
                                                    ) => (
                                                        <tr
                                                            key={index}
                                                            className="hover:bg-blue-gray-50 "
                                                        >
                                                            <td className="border border-blue-gray-100 py-3 px-4">
                                                                <Typography
                                                                    variant="small"
                                                                    className="font-normal text-gray-800"
                                                                >
                                                                    {
                                                                        accession_no
                                                                    }
                                                                </Typography>
                                                            </td>
                                                            <td className="border border-blue-gray-100 px-4">
                                                                <Typography
                                                                    variant="small"
                                                                    className="font-normal text-gray-800"
                                                                >
                                                                    {
                                                                        author_name
                                                                    }
                                                                </Typography>
                                                            </td>
                                                            <td className="border border-blue-gray-100 px-4">
                                                                <Typography
                                                                    variant="small"
                                                                    className="font-normal text-gray-800"
                                                                >
                                                                    {title}
                                                                </Typography>
                                                            </td>
                                                            <td className="border border-blue-gray-100 px-4">
                                                                <Typography
                                                                    variant="small"
                                                                    className="font-normal text-gray-800"
                                                                >
                                                                    {year}
                                                                </Typography>
                                                            </td>

                                                            <td className="border border-blue-gray-100 px-4">
                                                                <Typography
                                                                    variant="small"
                                                                    className="font-normal text-gray-800"
                                                                >
                                                                    {course}
                                                                </Typography>
                                                            </td>

                                                            <td className="border border-blue-gray-100 px-4">
                                                                <div className="flex items-center gap-2 ">
                                                                    <Tooltip content="Thesis Details">
                                                                        <Link
                                                                            className="hover:bg-blue-800 hover:rounded hover:text-white"
                                                                            href={route(
                                                                                "thesis.show",
                                                                                {
                                                                                    id,
                                                                                }
                                                                            )}
                                                                        >
                                                                            <BsInfoCircle className="text-2xl " />
                                                                        </Link>
                                                                    </Tooltip>

                                                                    <Tooltip content="Edit Thesis">
                                                                        <Link
                                                                            className="hover:bg-blue-800 hover:rounded hover:text-white"
                                                                            href={route(
                                                                                "thesis.edit",
                                                                                {
                                                                                    id,
                                                                                }
                                                                            )}
                                                                        >
                                                                            <BiEdit className="text-2xl" />
                                                                        </Link>
                                                                    </Tooltip>

                                                                    <Tooltip content="Delete Thesis">
                                                                        <button
                                                                            className="text-red-800 hover:bg-blue-800 hover:rounded"
                                                                            onClick={() =>
                                                                                deleteThesis(
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

                                <CardFooter className="grid grid-cols-4 items-center border-t border-blue-gray-50 p-4">
                                    {/* Left side: span-1 */}
                                    <div className="col-span-1">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            Page {data?.current_page} of{" "}
                                            {data?.last_page}
                                        </Typography>
                                    </div>

                                    {/* Center content: span-2 */}
                                    <div className="col-span-2 flex flex-col items-center">
                                        {/* Pagination numbers */}
                                        <TablePagination
                                            currentPage={
                                                data?.current_page || 1
                                            }
                                            lastPage={data?.last_page || 1}
                                            onPageChange={handlePagination}
                                        />

                                        {/* Entry count text */}
                                        <div className="mt-3 text-gray-700">
                                            Showing {(currentPage - 1) * 10 + 1}{" "}
                                            to{" "}
                                            {Math.min(
                                                currentPage * 10,
                                                data?.total
                                            )}{" "}
                                            of {data?.total} entries
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
