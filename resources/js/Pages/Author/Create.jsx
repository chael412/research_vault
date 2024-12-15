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

const Create = ({ auth }) => {
    const { data, setData, post, errors, reset, processing } = useForm({
        firstname: "",
        middlename: "",
        lastname: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await post(route("authors.store"));
            alert("Author was added successfully");
            reset();
        } catch (error) {
            console.error("Error adding author:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h2 className="font-semibold text-lg text-green-100 leading-tight">
                        Add Author
                    </h2>
                </div>
            }
        >
            <Head title="Authors" />

            <div className="flex justify-center">
                <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-lg p-6">
                    <form onSubmit={onSubmit} className="mt-8 mb-2">
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                First Name
                            </Typography>
                            <Input
                                size="md"
                                value={data.firstname}
                                onChange={(e) =>
                                    setData("firstname", e.target.value)
                                }
                                error={Boolean(errors.firstname)}
                            />
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Middle Name
                            </Typography>
                            <Input
                                size="md"
                                value={data.middlename}
                                onChange={(e) =>
                                    setData("middlename", e.target.value)
                                }
                                error={Boolean(errors.middlename)}
                            />
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Last Name
                            </Typography>
                            <Input
                                size="md"
                                value={data.lastname}
                                onChange={(e) =>
                                    setData("lastname", e.target.value)
                                }
                                error={Boolean(errors.lastname)}
                            />
                        </div>

                        <hr className="border-t-3 border-gray-400 mt-8" />

                        <div className="flex justify-end items-center gap-4 mt-4">
                            <Link href={route("authors.index")}>
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
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
