import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FaBook, FaUniversity, FaUser } from "react-icons/fa"; // Import icons

export default function Dashboard({ stats }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-green-100">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Container for the cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card for Total Thesis a*/}
                        <div className="bg-green-500 text-white p-6 rounded-lg shadow">
                            <div className="flex items-center space-x-4">
                                <FaBook className="text-4xl" />
                                <div>
                                    <h3 className="text-xl font-semibold hover:text-green-300 transition-colors">
                                        Total Thesis
                                    </h3>
                                    <p className="text-lg hover:text-green-300 transition-colors">
                                        {stats.totalThesis}
                                    </p>{" "}
                                    {/* Replace with dynamic data */}
                                </div>
                            </div>
                        </div>

                        {/* Card for Total Courses */}
                        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
                            <div className="flex items-center space-x-4">
                                <FaUniversity className="text-4xl" />
                                <div>
                                    <h3 className="text-xl font-semibold hover:text-blue-300 transition-colors">
                                        Total Courses
                                    </h3>
                                    <p className="text-lg hover:text-blue-300 transition-colors">
                                        {stats.totalCourses}
                                    </p>{" "}
                                    {/* Replace with dynamic data */}
                                </div>
                            </div>
                        </div>

                        {/* Card for Total Authors */}
                        <div className="bg-yellow-800 text-white p-6 rounded-lg shadow">
                            <div className="flex items-center space-x-4">
                                <FaUser className="text-4xl" />
                                <div>
                                    <h3 className="text-xl font-semibold hover:text-yellow-300 transition-colors">
                                        Total Authors
                                    </h3>
                                    <p className="text-lg hover:text-yellow-300 transition-colors">
                                        {stats.totalAuthors}
                                    </p>{" "}
                                    {/* Replace with dynamic data */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional content or layout can go here */}
                    <div className="mt-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">Welcome</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
