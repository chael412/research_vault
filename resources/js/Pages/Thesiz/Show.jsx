import { BsArrowReturnLeft } from "react-icons/bs";
import { Button, Tooltip } from "@material-tailwind/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Show = ({ auth, thesisId, thesiz }) => {
    const [thesis, setThesis] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch thesis data on component mount
    useEffect(() => {
        const fetchThesis = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/view_thesis/${thesisId}`
                );
                console.log(response.data);
                setThesis(response.data);
            } catch (err) {
                setError("Error fetching thesis data");
            } finally {
                setLoading(false);
            }
        };

        fetchThesis();
    }, [thesisId]);

    console.log(thesiz.files);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h2 className="font-semibold text-lg text-green-100 leading-tight">
                        THESIS Details
                    </h2>
                </div>
            }
        >
            <Head title="Thesis Details" />

            <div className="flex justify-center">
                <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-4xl px-2 py-6">
                    <div className="flex justify-end items-center">
                        <Tooltip content="Back">
                            <Link href={route("thesis.index")}>
                                <Button variant="text">
                                    <BsArrowReturnLeft className="text-xl" />
                                </Button>
                            </Link>
                        </Tooltip>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-4xl px-6 py-6">
                            <div className="grid grid-cols-3 gap-6">
                                {/* Left column: Thesis file */}
                                <div className="col-span-1">
                                    {loading ? (
                                        <div className="flex items-center justify-center h-full border border-gray-300 rounded-md p-4">
                                            <p className="text-gray-500">
                                                Loading...
                                            </p>
                                        </div>
                                    ) : thesiz && thesiz.files ? (
                                        <div className="border border-gray-300 rounded-md p-4">
                                            <p className="font-semibold text-gray-700 mb-2">
                                                Thesis File:
                                            </p>
                                            <a
                                                href={`/${thesiz.files}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center flex-col"
                                            >
                                                <img
                                                    src="/img/thesis.png"
                                                    alt="Thesis Preview"
                                                    className="w-32 h-32 object-contain hover:opacity-80"
                                                />
                                                <p className="text-center mt-2 text-blue-500">
                                                    Click to view PDF
                                                </p>
                                            </a>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center h-full border border-gray-300 rounded-md p-4">
                                            <p className="text-gray-500">
                                                No thesis file available
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Right column: Thesis details */}
                                <div className="col-span-2">
                                    {thesiz ? (
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-semibold text-gray-800">
                                                {thesiz.title || "N/A"}
                                            </h2>
                                            <p>
                                                <strong>Accession No:</strong>{" "}
                                                {thesiz.accession_no || "N/A"}
                                            </p>
                                            <p>
                                                <strong>Year:</strong>{" "}
                                                {thesiz.year || "N/A"}
                                            </p>
                                            <p>
                                                <strong>Copies:</strong>{" "}
                                                {thesiz.copies || "N/A"}
                                            </p>
                                            <p>
                                                <strong>Author:</strong>{" "}
                                                {thesiz.author
                                                    ? `${thesiz.author.firstname} ${thesiz.author.lastname}`
                                                    : "N/A"}
                                            </p>
                                            <p>
                                                <strong>Course:</strong>{" "}
                                                {thesiz.course
                                                    ? thesiz.course.course_name
                                                    : "N/A"}
                                            </p>
                                            <p>
                                                <strong>Date Process:</strong>{" "}
                                                {thesiz.date_process
                                                    ? thesiz.date_process
                                                    : "N/A"}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="text-gray-500">
                                            No thesis details available
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
