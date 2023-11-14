import React, { ReactNode } from "react"

interface TopbarProps {
    children: ReactNode
}

const Topbar : React.FC<TopbarProps> = ({children}) => {
    return (
        <div>{children}</div>
    )
}

export default Topbar