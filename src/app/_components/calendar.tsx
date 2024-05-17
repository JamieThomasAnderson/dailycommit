"use client";

import { Calendar } from "~/components/ui/calendar"
import React from "react";

const CommitCalendar = () => {
    const [date, setDate] = React.useState<Date | undefined>()

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
    )
}

export default CommitCalendar;