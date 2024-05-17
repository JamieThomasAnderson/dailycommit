import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

import { GitMerge, Trash2 } from 'lucide-react';

const CommitTable = () => {
    const commits = [
        {
            Project: "Running",
            Date: "12/12/2024",
            Time: "1:26:42",
        },
        {
            Project: "Running",
            Date: "12/12/2024",
            Time: "1:26:42",
        },
        {
            Project: "Running",
            Date: "12/12/2024",
            Time: "1:26:42",
        },
        {
            Project: "Running",
            Date: "12/12/2024",
            Time: "1:26:42",
        },
        {
            Project: "Running",
            Date: "12/12/2024",
            Time: "1:26:42",
        },
        {
            Project: "Running",
            Date: "12/12/2024",
            Time: "1:26:42",
        },
        {
            Project: "Running",
            Date: "12/12/2024",
            Time: "1:26:42",
        },

    ]
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-96">Project</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                    <TableHead></TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {commits.map((commits) => (
                    <TableRow key={commits.Project}>
                        <TableCell className="font-medium">{commits.Project}</TableCell>
                        <TableCell>{commits.Date}</TableCell>
                        <TableCell className="text-right">{commits.Time}</TableCell>
                        <TableCell className="flex items-stretch">
                            <div className="hover:bg-neutral-300 p-1 rounded">
                                <GitMerge size={18} />
                            </div>

                            <div className="hover:bg-neutral-300 p-1 rounded">
                                <Trash2 size={18} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CommitTable;