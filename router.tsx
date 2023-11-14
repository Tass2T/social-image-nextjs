import { useMemo } from "react";

const routes = useMemo(() => [
    {
        label: 'Home',
        url: "/"
    },
    {
        label: "Settings",
        url: "/settings"
    }
], [])